import jsPDF from 'jspdf';
import { QuoteDraft } from '../types';
import { BRAND_INFO, CURATED_KITS } from '../data/giftingData';

interface GeneratePdfOptions {
  draft: QuoteDraft;
  quoteRef: string;
  discountRate: number;
  discountedUnit: number;
  subtotal: number;
  gstAmount: number;
  grandTotal: number;
}

export const generatePdfProposal = ({
  draft,
  quoteRef,
  discountRate,
  discountedUnit,
  subtotal,
  gstAmount,
  grandTotal,
}: GeneratePdfOptions) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const isCustomKit = draft.customKitItems && draft.customKitItems.length > 0;
  const baseKit = CURATED_KITS.find((k) => k.id === draft.selectedKitId) || CURATED_KITS[1];
  const kitTitle = isCustomKit
    ? `Bespoke Corporate Kit (${draft.customKitItems?.length} Items)`
    : baseKit.name;

  const todayStr = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const validUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // --- Color Palette ---
  const PRIMARY_DARK = [28, 25, 23]; // #1c1917
  const GOLD = [162, 110, 44];       // #A26E2C
  const GOLD_LIGHT = [253, 248, 240]; // #FDF8F0
  const BG_LIGHT = [250, 248, 245];   // #FAF8F5
  const TEXT_DARK = [40, 36, 32];
  const TEXT_MUTED = [115, 105, 95];
  const BORDER_COLOR = [225, 220, 212];
  const EMERALD = [22, 101, 52];

  let currentY = 12;

  // Top Accent Stripe
  doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.rect(0, 0, 210, 4, 'F');

  // --- Header Section ---
  currentY = 16;

  // Brand Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.text('BHET', 15, currentY);

  // Brand Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text('CORPORATE GIFTING & BRANDED MERCHANDISE', 15, currentY + 4.5);

  doc.setFontSize(7);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('Thoughtfully Given. Professionally Remembered.', 15, currentY + 8.5);

  // Proposal Title & Ref (Top Right)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.text('COMMERCIAL PROPOSAL', 195, currentY, { align: 'right' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text(`Ref: ${quoteRef}`, 195, currentY + 5, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text(`Date: ${todayStr} | Valid For: 30 Days (${validUntil})`, 195, currentY + 9, { align: 'right' });

  // Divider line
  currentY += 14;
  doc.setDrawColor(BORDER_COLOR[0], BORDER_COLOR[1], BORDER_COLOR[2]);
  doc.setLineWidth(0.4);
  doc.line(15, currentY, 195, currentY);

  // --- Client & Order Info Box ---
  currentY += 4;
  doc.setFillColor(BG_LIGHT[0], BG_LIGHT[1], BG_LIGHT[2]);
  doc.roundedRect(15, currentY, 180, 32, 2, 2, 'F');
  doc.setDrawColor(BORDER_COLOR[0], BORDER_COLOR[1], BORDER_COLOR[2]);
  doc.roundedRect(15, currentY, 180, 32, 2, 2, 'D');

  // Left Column: Client Details
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text('CLIENT DETAILS (PREPARED FOR)', 20, currentY + 6);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.text(draft.companyName || 'Corporate Client', 20, currentY + 11.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text(`Attention: ${draft.contactName || 'Procurement / HR Team'}`, 20, currentY + 16.5);
  doc.text(`Email: ${draft.email || 'N/A'}`, 20, currentY + 21);
  doc.text(`Contact: ${draft.phone || 'N/A'} | City: ${draft.city || 'Pan-India'}`, 20, currentY + 25.5);

  // Right Column: Order Parameters
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text('ORDER PARAMETERS', 115, currentY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  doc.text(`Occasion: ${draft.occasion || 'Employee Gifting'}`, 115, currentY + 11.5);
  doc.text(`Quantity: ${draft.quantity} Units`, 115, currentY + 16.5);
  doc.text(`Packaging: ${draft.boxColor || 'Classic Black'} Rigid Gift Box`, 115, currentY + 21);
  doc.text(`Target Delivery: ${draft.targetDeliveryDate || 'Standard (5-7 Business Days)'}`, 115, currentY + 25.5);

  // --- Specifications / Itemized Breakdown Section ---
  currentY += 36;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.text('GIFT KIT SPECIFICATIONS & INCLUSIONS', 15, currentY);

  currentY += 3.5;

  // Table Header
  doc.setFillColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.roundedRect(15, currentY, 180, 7, 1, 1, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(255, 255, 255);
  doc.text('ITEM / SPECIFICATION', 20, currentY + 4.8);
  doc.text('CUSTOMIZATION / FINISH', 105, currentY + 4.8);
  doc.text('QTY', 145, currentY + 4.8, { align: 'center' });
  doc.text('STATUS', 185, currentY + 4.8, { align: 'right' });

  currentY += 7;

  // Items List
  if (isCustomKit && draft.customKitItems && draft.customKitItems.length > 0) {
    draft.customKitItems.forEach((item, index) => {
      const isAlt = index % 2 === 1;
      if (isAlt) {
        doc.setFillColor(BG_LIGHT[0], BG_LIGHT[1], BG_LIGHT[2]);
        doc.rect(15, currentY, 180, 7, 'F');
      }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
      doc.text(item.itemName, 20, currentY + 4.8);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
      doc.text(item.optionName, 105, currentY + 4.8);

      doc.text(`${draft.quantity}`, 145, currentY + 4.8, { align: 'center' });

      doc.setTextColor(EMERALD[0], EMERALD[1], EMERALD[2]);
      doc.setFont('helvetica', 'bold');
      doc.text('Included', 185, currentY + 4.8, { align: 'right' });

      currentY += 7;
    });
  } else {
    // Curated kit items
    baseKit.itemsIncluded.forEach((itemName, index) => {
      const isAlt = index % 2 === 1;
      if (isAlt) {
        doc.setFillColor(BG_LIGHT[0], BG_LIGHT[1], BG_LIGHT[2]);
        doc.rect(15, currentY, 180, 6.5, 'F');
      }

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
      doc.text(`•  ${itemName}`, 20, currentY + 4.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
      doc.text('Company Logo Branded', 105, currentY + 4.5);

      doc.text(`${draft.quantity}`, 145, currentY + 4.5, { align: 'center' });

      doc.setTextColor(EMERALD[0], EMERALD[1], EMERALD[2]);
      doc.setFont('helvetica', 'bold');
      doc.text('Included', 185, currentY + 4.5, { align: 'right' });

      currentY += 6.5;
    });
  }

  // Packaging & Branding row
  doc.setFillColor(GOLD_LIGHT[0], GOLD_LIGHT[1], GOLD_LIGHT[2]);
  doc.rect(15, currentY, 180, 7.5, 'F');
  doc.setDrawColor(BORDER_COLOR[0], BORDER_COLOR[1], BORDER_COLOR[2]);
  doc.line(15, currentY, 195, currentY);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text('Premium Packaging & Branding Services', 20, currentY + 5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  const brandingStr = (draft.brandingType && draft.brandingType.length > 0)
    ? draft.brandingType.join(' + ')
    : 'Screen Printing + Laser Engraving';
  doc.text(`${brandingStr} + Gift Box Sleeve`, 105, currentY + 5);
  doc.text(`${draft.quantity}`, 145, currentY + 5, { align: 'center' });

  doc.setTextColor(EMERALD[0], EMERALD[1], EMERALD[2]);
  doc.setFont('helvetica', 'bold');
  doc.text('Complimentary', 185, currentY + 5, { align: 'right' });

  currentY += 10.5;

  // --- Commercial Summary Table ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.text('COMMERCIAL INVESTMENT ESTIMATE', 15, currentY);

  currentY += 3.5;

  // Commercial Table Header
  doc.setFillColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.roundedRect(15, currentY, 180, 7, 1, 1, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(255, 255, 255);
  doc.text('DESCRIPTION', 20, currentY + 4.8);
  doc.text('QTY', 115, currentY + 4.8, { align: 'center' });
  doc.text('UNIT RATE', 150, currentY + 4.8, { align: 'right' });
  doc.text('TOTAL AMOUNT (INR)', 185, currentY + 4.8, { align: 'right' });

  currentY += 7;

  // Main Kit Row
  doc.setFillColor(BG_LIGHT[0], BG_LIGHT[1], BG_LIGHT[2]);
  doc.rect(15, currentY, 180, 10, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.text(kitTitle, 20, currentY + 4.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('Includes product customization, rigid packaging, and pre-dispatch QA inspection', 20, currentY + 8);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  doc.text(`${draft.quantity}`, 115, currentY + 5.5, { align: 'center' });
  doc.text(`Rs. ${discountedUnit.toLocaleString()}`, 150, currentY + 5.5, { align: 'right' });
  doc.text(`Rs. ${subtotal.toLocaleString()}`, 185, currentY + 5.5, { align: 'right' });

  currentY += 10;

  // Bottom Summary Box (Right Aligned)
  const summaryBoxWidth = 85;
  const summaryBoxX = 110;

  // Subtotal
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('Subtotal (Net):', summaryBoxX + 35, currentY + 4.5, { align: 'right' });
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  doc.text(`Rs. ${subtotal.toLocaleString()}`, 185, currentY + 4.5, { align: 'right' });

  currentY += 5;

  // Volume Discount
  if (discountRate > 0) {
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(EMERALD[0], EMERALD[1], EMERALD[2]);
    doc.text(`Volume Tier Discount (${(discountRate * 100).toFixed(0)}%):`, summaryBoxX + 35, currentY + 4.5, { align: 'right' });
    doc.setFont('helvetica', 'bold');
    doc.text(`Applied`, 185, currentY + 4.5, { align: 'right' });
    currentY += 5;
  }

  // GST (18%)
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('Applicable GST (18% ITC Eligible):', summaryBoxX + 35, currentY + 4.5, { align: 'right' });
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  doc.text(`Rs. ${gstAmount.toLocaleString()}`, 185, currentY + 4.5, { align: 'right' });

  currentY += 5.5;

  // Grand Total Box
  doc.setFillColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.roundedRect(summaryBoxX, currentY, summaryBoxWidth, 9.5, 1.5, 1.5, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text('TOTAL ESTIMATED INVESTMENT:', summaryBoxX + 5, currentY + 6.2);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  doc.text(`Rs. ${grandTotal.toLocaleString()}`, 185, currentY + 6.2, { align: 'right' });

  currentY += 13;

  // --- Terms & BHET Corporate Assurances ---
  doc.setFillColor(BG_LIGHT[0], BG_LIGHT[1], BG_LIGHT[2]);
  doc.roundedRect(15, currentY, 180, 27, 2, 2, 'F');
  doc.setDrawColor(BORDER_COLOR[0], BORDER_COLOR[1], BORDER_COLOR[2]);
  doc.roundedRect(15, currentY, 180, 27, 2, 2, 'D');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text('TERMS OF ENGAGEMENT & BHET ASSURANCES', 20, currentY + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  doc.text('1. Digital Artwork Proofing: Free 3D visual proof shared within 24 hours of vector logo receipt.', 20, currentY + 10);
  doc.text('2. Sampling Service: Physical pre-production sample unit available upon request for bulk orders (100+ units).', 20, currentY + 14);
  doc.text('3. Pan-India Delivery: Direct single-point dispatch or individual multi-city home doorstep delivery across India.', 20, currentY + 18);
  doc.text('4. Invoicing & Compliance: 100% compliant GST tax invoice provided with full input tax credit eligibility.', 20, currentY + 22);

  currentY += 31;

  // --- Authorization & Sign-off Section ---
  doc.setDrawColor(BORDER_COLOR[0], BORDER_COLOR[1], BORDER_COLOR[2]);
  doc.setLineWidth(0.3);

  // Prepared By Box
  doc.line(15, currentY + 10, 85, currentY + 10);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.text('PREPARED BY: BHET CORPORATE DESK', 15, currentY + 14);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text(`${BRAND_INFO.contactEmail} | ${BRAND_INFO.contactPhone}`, 15, currentY + 17.5);

  // Client Sign-off Box
  doc.line(125, currentY + 10, 195, currentY + 10);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.text('CLIENT APPROVAL / AUTHORIZED SIGNATURE', 125, currentY + 14);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('Name, Designation & Company Stamp', 125, currentY + 17.5);

  // --- Bottom Footer ---
  doc.setFillColor(PRIMARY_DARK[0], PRIMARY_DARK[1], PRIMARY_DARK[2]);
  doc.rect(0, 287, 210, 10, 'F');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(180, 175, 168);
  doc.text(
    `BHET Corporate Gifting Solutions • Confidential Proposal • GSTIN / Corporate Invoicing on Confirmation`,
    15,
    293
  );

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(GOLD[0], GOLD[1], GOLD[2]);
  doc.text(`bhetgifting.com`, 195, 293, { align: 'right' });

  // Save the document
  const fileName = `BHET_Proposal_${(draft.companyName || 'Corporate').replace(/[^a-zA-Z0-9]/g, '_')}_${quoteRef}.pdf`;
  doc.save(fileName);
};

import { GraveEntity } from '@/types/graveyard';

export type CertificateStyle = 'baroque' | 'classified';

/**
 * Wraps text into lines that fit within maxWidth on a 2D canvas context.
 */
function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine ? `${currentLine} ${words[i]}` : words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

/**
 * Draws an ornate gold filigree corner.
 */
function drawFiligreeCorner(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  flipX: boolean,
  flipY: boolean
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 3;

  // L-bracket outer
  ctx.beginPath();
  ctx.moveTo(0, 40);
  ctx.lineTo(0, 0);
  ctx.lineTo(40, 0);
  ctx.stroke();

  // Decorative inner arc
  ctx.beginPath();
  ctx.arc(20, 20, 15, Math.PI, 1.5 * Math.PI);
  ctx.stroke();

  // Small diamond flourish
  ctx.fillStyle = '#fbbf24';
  ctx.beginPath();
  ctx.moveTo(35, 35);
  ctx.lineTo(40, 30);
  ctx.lineTo(45, 35);
  ctx.lineTo(40, 40);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

/**
 * Renders high-fidelity 2400x1600 Canvas for Baroque Certificate of Demise.
 */
function renderBaroqueCertificate(
  canvas: HTMLCanvasElement,
  entity: GraveEntity,
  caseNumber: string
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = 2400;
  const h = 1600;

  // 1. Rich dark obsidian parchment background
  const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 200, w / 2, h / 2, 1400);
  bgGrad.addColorStop(0, '#131110');
  bgGrad.addColorStop(0.7, '#0b0a09');
  bgGrad.addColorStop(1, '#050404');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // 2. Ornate Double Gold Borders
  ctx.strokeStyle = '#92400e';
  ctx.lineWidth = 14;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 3;
  ctx.strokeRect(84, 84, w - 168, h - 168);

  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(96, 96, w - 192, h - 192);

  // 3. Four Ornate Corners
  drawFiligreeCorner(ctx, 110, 110, false, false);
  drawFiligreeCorner(ctx, w - 110, 110, true, false);
  drawFiligreeCorner(ctx, 110, h - 110, false, true);
  drawFiligreeCorner(ctx, w - 110, h - 110, true, true);

  // 4. Header Badge / Crest
  ctx.textAlign = 'center';
  ctx.font = 'bold 26px "Courier New", monospace';
  ctx.fillStyle = '#f59e0b';
  ctx.letterSpacing = '6px';
  ctx.fillText('• DEPARTMENT OF DIGITAL MORTALITY & ARCHIVAL FORENSICS •', w / 2, 190);

  // 5. Main Title
  ctx.font = 'bold 74px Georgia, "Times New Roman", serif';
  const titleGrad = ctx.createLinearGradient(w / 2 - 400, 0, w / 2 + 400, 0);
  titleGrad.addColorStop(0, '#fef08a');
  titleGrad.addColorStop(0.5, '#f59e0b');
  titleGrad.addColorStop(1, '#fef08a');
  ctx.fillStyle = titleGrad;
  ctx.fillText('CERTIFICATE OF DIGITAL DEMISE', w / 2, 280);

  // Divider line
  ctx.strokeStyle = '#b45309';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 450, 315);
  ctx.lineTo(w / 2 + 450, 315);
  ctx.stroke();

  // Case ID & Classification
  ctx.font = 'bold 24px "Courier New", monospace';
  ctx.fillStyle = '#a1a1aa';
  ctx.fillText(`CASE ID: ${caseNumber}   •   STATUS: EXTINCT (${entity.status.toUpperCase()})`, w / 2, 355);

  // 6. Identity Box
  ctx.fillStyle = 'rgba(24, 24, 27, 0.7)';
  ctx.strokeStyle = 'rgba(217, 119, 6, 0.35)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(240, 410, w - 480, 260, 18);
  ctx.fill();
  ctx.stroke();

  // Entity Name
  ctx.font = '900 82px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(entity.name, w / 2, 510);

  // Domain & Lifespan
  ctx.font = 'bold 30px "Courier New", monospace';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText(entity.primary_domain || 'GLOBAL WEB', w / 2, 570);

  ctx.font = 'bold 28px Georgia, serif';
  ctx.fillStyle = '#e4e4e7';
  ctx.fillText(`BORN: ${entity.founded_year || 'Unknown'}      —      DECEASED: ${entity.death_year || 'Unknown'} (${entity.lifespan})`, w / 2, 620);

  // 7. Forensic Autopsy Findings Card
  ctx.fillStyle = 'rgba(39, 10, 10, 0.55)';
  ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
  ctx.beginPath();
  ctx.roundRect(240, 710, w - 480, 380, 18);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = 'left';
  ctx.font = 'bold 24px "Courier New", monospace';
  ctx.fillStyle = '#f87171';
  ctx.fillText('PATHOLOGICAL DIAGNOSIS & FATAL KILL FACTOR:', 280, 765);

  ctx.font = 'bold 32px Georgia, serif';
  ctx.fillStyle = '#fca5a5';
  ctx.fillText(entity.cause_category.toUpperCase(), 280, 815);

  // Wrap Cause of Death
  ctx.font = '26px Georgia, serif';
  ctx.fillStyle = '#e4e4e7';
  const causeLines = wrapCanvasText(ctx, entity.cause_of_death_summary, w - 560);
  let curY = 870;
  causeLines.slice(0, 5).forEach(line => {
    ctx.fillText(line, 280, curY);
    curY += 40;
  });

  // 8. Seal & Signature Footer
  // Gold Archival Wax Seal
  const sealX = 460;
  const sealY = 1260;
  ctx.save();
  ctx.beginPath();
  ctx.arc(sealX, sealY, 110, 0, 2 * Math.PI);
  ctx.fillStyle = '#78350f';
  ctx.fill();
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#f59e0b';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(sealX, sealY, 94, 0, 2 * Math.PI);
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 6]);
  ctx.strokeStyle = '#fef08a';
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.textAlign = 'center';
  ctx.font = 'bold 22px "Courier New", monospace';
  ctx.fillStyle = '#fef08a';
  ctx.fillText('OFFICIAL ARCHIVE', sealX, sealY - 30);
  ctx.font = '900 36px Georgia, serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('SEAL', sealX, sealY + 12);
  ctx.font = 'bold 18px "Courier New", monospace';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText(`${entity.confidence_score || 100}% VERIFIED`, sealX, sealY + 50);
  ctx.restore();

  // Registry text next to seal
  ctx.textAlign = 'left';
  ctx.font = 'bold 22px "Courier New", monospace';
  ctx.fillStyle = '#d4d4d8';
  ctx.fillText('PERMANENT ARCHIVE REGISTRY', sealX + 140, sealY - 35);
  ctx.font = '19px "Courier New", monospace';
  ctx.fillStyle = '#a1a1aa';
  ctx.fillText(`ARCHIVAL LEDGER: SHA-256 SECURED`, sealX + 140, sealY);
  ctx.fillStyle = '#10b981';
  ctx.fillText(`STATUS: PERMANENTLY PRESERVED`, sealX + 140, sealY + 35);

  // Coroner signature on right
  ctx.textAlign = 'right';
  ctx.font = 'italic bold 52px Georgia, "Brush Script MT", cursive';
  ctx.fillStyle = '#fef08a';
  ctx.fillText('A. Turing, Ph.D.', w - 280, sealY - 20);

  ctx.strokeStyle = '#71717a';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w - 620, sealY + 5);
  ctx.lineTo(w - 280, sealY + 5);
  ctx.stroke();

  ctx.font = 'bold 20px "Courier New", monospace';
  ctx.fillStyle = '#d4d4d8';
  ctx.fillText('CHIEF DIGITAL PATHOLOGIST & CORONER', w - 280, sealY + 35);
  ctx.font = '18px "Courier New", monospace';
  ctx.fillStyle = '#71717a';
  ctx.fillText(`DATE OF INQUEST: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, w - 280, sealY + 65);

  // Bottom micro-hash
  ctx.textAlign = 'center';
  ctx.font = '15px "Courier New", monospace';
  ctx.fillStyle = '#52525b';
  ctx.fillText(`SECURE RECORD VERIFICATION // HASH: ${entity.id} • IMMUTABLE HISTORICAL RECORD`, w / 2, h - 110);
}

/**
 * Renders high-fidelity 2400x1600 Canvas for Classified Autopsy Dossier.
 */
function renderClassifiedDossier(
  canvas: HTMLCanvasElement,
  entity: GraveEntity,
  caseNumber: string
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = 2400;
  const h = 1600;

  // 1. Dark Technical Slate Background
  ctx.fillStyle = '#0c0d0e';
  ctx.fillRect(0, 0, w, h);

  // Subtle grid lines
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 80) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += 80) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Border with warning hashes
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 8;
  ctx.strokeRect(40, 40, w - 80, h - 80);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 2;
  ctx.strokeRect(60, 60, w - 120, h - 120);

  // 2. Big Red Diagonal TOP SECRET Stamp
  ctx.save();
  ctx.translate(w - 550, 240);
  ctx.rotate(-0.2);
  ctx.strokeStyle = 'rgba(239, 68, 68, 0.85)';
  ctx.lineWidth = 10;
  ctx.strokeRect(-260, -60, 520, 120);
  ctx.font = '900 52px "Arial Black", Impact, sans-serif';
  ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
  ctx.textAlign = 'center';
  ctx.fillText('CLASSIFIED AUTOPSY', 0, 16);
  ctx.restore();

  // 3. Technical Header
  ctx.textAlign = 'left';
  ctx.font = 'bold 36px "Courier New", monospace';
  ctx.fillStyle = '#ef4444';
  ctx.fillText('// FORENSIC INCIDENT INVESTIGATION DOSSIER', 110, 140);

  ctx.font = 'bold 22px "Courier New", monospace';
  ctx.fillStyle = '#a1a1aa';
  ctx.fillText(`SUBJECT IDENTIFIER: [ ${entity.slug.toUpperCase()} ]   •   CASE FILE: ${caseNumber}`, 110, 185);

  ctx.strokeStyle = '#27272a';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(110, 220);
  ctx.lineTo(w - 110, 220);
  ctx.stroke();

  // 4. Target Demographics Panel
  ctx.fillStyle = '#141517';
  ctx.fillRect(110, 260, w - 220, 220);
  ctx.strokeStyle = '#3f3f46';
  ctx.lineWidth = 2;
  ctx.strokeRect(110, 260, w - 220, 220);

  ctx.font = '900 72px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(entity.name, 150, 350);

  ctx.font = 'bold 26px "Courier New", monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText(`DOMAIN: ${entity.primary_domain || 'N/A'}`, 150, 410);
  ctx.fillStyle = '#a1a1aa';
  ctx.fillText(`ERA: ${entity.lifespan}   |   CATEGORY: ${entity.category}   |   ORIGIN: ${entity.country || 'Global'}`, 150, 450);

  // 5. Autopsy Findings: Fatal Pathology
  ctx.fillStyle = '#1a1113';
  ctx.fillRect(110, 520, w - 220, 360);
  ctx.strokeStyle = '#b91c1c';
  ctx.lineWidth = 3;
  ctx.strokeRect(110, 520, w - 220, 360);

  ctx.font = 'bold 26px "Courier New", monospace';
  ctx.fillStyle = '#f87171';
  ctx.fillText('[ SECTION 01: PRIMARY FATAL MECHANISM ]', 150, 575);

  ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = '#ef4444';
  ctx.fillText(`KILL FACTOR: ${entity.cause_category}`, 150, 630);

  ctx.font = '26px Georgia, serif';
  ctx.fillStyle = '#e4e4e7';
  const causeLines = wrapCanvasText(ctx, entity.cause_of_death_summary, w - 340);
  let cY = 690;
  causeLines.slice(0, 4).forEach(l => {
    ctx.fillText(l, 150, cY);
    cY += 40;
  });

  // 6. Section 02: Final Recorded Moments & Last Words
  ctx.fillStyle = '#111827';
  ctx.fillRect(110, 920, w - 220, 300);
  ctx.strokeStyle = '#374151';
  ctx.lineWidth = 2;
  ctx.strokeRect(110, 920, w - 220, 300);

  ctx.font = 'bold 26px "Courier New", monospace';
  ctx.fillStyle = '#60a5fa';
  ctx.fillText('[ SECTION 02: TIME OF CESSATION & FINAL DISPATCH ]', 150, 975);

  const momentText = entity.final_moments || entity.status_reason || 'Server racks decommissioned. DNS propagation withdrawn. Silent departure.';
  ctx.font = '24px "Courier New", monospace';
  ctx.fillStyle = '#9ca3af';
  const momentLines = wrapCanvasText(ctx, momentText, w - 340);
  let mY = 1030;
  momentLines.slice(0, 4).forEach(l => {
    ctx.fillText(l, 150, mY);
    mY += 36;
  });

  // 7. Simulated Barcode & Cryptographic Stamp
  const barcodeX = 150;
  const barcodeY = 1260;
  // Draw barcode bars
  ctx.fillStyle = '#ffffff';
  let bOff = 0;
  for (let i = 0; i < 90; i++) {
    const barW = (i % 3 === 0 ? 5 : (i % 5 === 0 ? 8 : 3));
    ctx.fillRect(barcodeX + bOff, barcodeY, barW, 90);
    bOff += barW + 4;
  }
  ctx.font = 'bold 20px "Courier New", monospace';
  ctx.fillStyle = '#9ca3af';
  ctx.fillText(`SERIAL // ${entity.id.toUpperCase()}`, barcodeX, barcodeY + 125);

  // Clearance stamp on bottom right
  ctx.save();
  ctx.translate(w - 420, 1340);
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 5;
  ctx.strokeRect(-200, -50, 400, 100);
  ctx.font = 'bold 30px "Courier New", monospace';
  ctx.fillStyle = '#10b981';
  ctx.textAlign = 'center';
  ctx.fillText('EVIDENCE SECURED', 0, -8);
  ctx.font = '16px "Courier New", monospace';
  ctx.fillStyle = '#6ee7b7';
  ctx.fillText('DISSECTION COMPLETE', 0, 24);
  ctx.restore();
}

/**
 * Downloads a rendered PNG certificate or dossier directly to the user's computer.
 */
export async function downloadCertificatePNG(
  entity: GraveEntity,
  style: CertificateStyle
): Promise<void> {
  if (typeof window === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.width = 2400;
  canvas.height = 1600;

  const hashSum = entity.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const caseNumber = `MORT-${entity.death_year || 2024}-${entity.slug.toUpperCase().slice(0, 6)}-${(hashSum % 8999) + 1000}`;

  if (style === 'baroque') {
    renderBaroqueCertificate(canvas, entity, caseNumber);
  } else {
    renderClassifiedDossier(canvas, entity, caseNumber);
  }

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        resolve();
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${entity.slug}-${style === 'baroque' ? 'death-certificate' : 'autopsy-dossier'}.png`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      resolve();
    }, 'image/png');
  });
}

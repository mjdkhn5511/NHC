import fs from 'node:fs';

const report = JSON.parse(fs.readFileSync('report.json', 'utf8'));

console.log('=== PERFORMANCE METRICS ===');
const metrics = report.audits.metrics.details.items[0];
console.log('FCP:', metrics.firstContentfulPaint, 'ms');
console.log('LCP:', metrics.largestContentfulPaint, 'ms');
console.log('Speed Index:', metrics.speedIndex, 'ms');
console.log('TBT:', metrics.totalBlockingTime, 'ms');
console.log('CLS:', metrics.cumulativeLayoutShift);

console.log('\n=== LCP ELEMENT ===');
const lcpAudit = report.audits['largest-contentful-paint-element'];
if (lcpAudit && lcpAudit.details && lcpAudit.details.items) {
  lcpAudit.details.items.forEach(item => {
    console.log('Element:', item.node?.snippet);
    console.log('Selector:', item.node?.selector);
    console.log('Type:', item.node?.nodeLabel);
  });
}

console.log('\n=== LCP BREAKDOWN / DIAGNOSTICS ===');
const lcpBreakdown = report.audits['lcp-breakdown'];
if (lcpBreakdown && lcpBreakdown.details) {
  console.log(JSON.stringify(lcpBreakdown.details, null, 2));
}

console.log('\n=== NETWORK REQUEST FOR LCP ELEMENT ===');
const networkRequests = report.audits['network-requests']?.details?.items || [];
networkRequests.forEach(req => {
  if (req.url.includes('kidney-urology') || req.resourceType === 'Image') {
    console.log(req.url, req.resourceType, 'Start:', Math.round(req.startTime), 'End:', Math.round(req.endTime), 'Duration:', Math.round(req.duration), 'Priority:', req.priority);
  }
});

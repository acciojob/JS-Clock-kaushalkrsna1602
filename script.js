() => {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const minsDegrees = 6 * mins + 90; // Calculate the degree value
  const radians = minsDegrees * Math.PI / 180; // Convert to radians

  // Build the rotation matrix
  let a = Math.cos(radians);
  let b = Math.sin(radians);
  let c = -b;
  let d = a;
  let e = 0;
  let f = 0;

  // Round values to six decimal places
  a = parseFloat(a.toFixed(6));
  b = parseFloat(b.toFixed(6));
  c = parseFloat(c.toFixed(6));
  d = parseFloat(d.toFixed(6));
  e = parseFloat(e.toFixed(6));
  f = parseFloat(f.toFixed(6));

  // Cypress custom command to assert approximate values
  cy.get('.min-hand').should(($el) => {
    const transform = $el.css('transform');
    const match = transform.match(/matrix\(([^)]+)\)/);
    if (match) {
      const matrixValues = match[1].split(',').map(parseFloat);

      // Allow a tolerance of 0.01 for floating point differences
      const tolerance = 0.01;
      expect(matrixValues[0]).to.be.closeTo(a, tolerance);
      expect(matrixValues[1]).to.be.closeTo(b, tolerance);
      expect(matrixValues[2]).to.be.closeTo(c, tolerance);
      expect(matrixValues[3]).to.be.closeTo(d, tolerance);
    } else {
      throw new Error('Transform matrix not found');
    }
  });
}

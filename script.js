document.getElementById('incidentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let score = 0;

  const dataExposed = document.getElementById('dataExposed').value;
  const malware = document.getElementById('malware').value;
  const downtime = document.getElementById('downtime').value;

  if (dataExposed === 'yes') score++;
  if (malware === 'yes') score++;
  if (downtime === 'yes') score++;

  let riskLevel = 'Low Risk';
  if (score === 2) riskLevel = 'Moderate Risk';
  else if (score === 3) riskLevel = 'High Risk';

  document.getElementById('result').innerHTML = `
    <h2>${riskLevel}</h2>
    <p>Based on your answers, your incident is categorized as <strong>${riskLevel}</strong>.</p>
    <p>Suggested Action: ${getAdvice(riskLevel)}</p>
  `;
});

function getAdvice(risk) {
  if (risk === 'High Risk') return 'Immediately inform your IT provider and isolate affected systems.';
  if (risk === 'Moderate Risk') return 'Monitor systems and alert your internal team.';
  return 'Keep a record of the event. No urgent action required.';
}

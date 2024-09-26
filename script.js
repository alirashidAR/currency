// Fetch data from your API or database
fetch('https://solaris-backend-ckvh.vercel.app/teams')
.then(response => response.json())
.then(data => {
  const teamTableBody = document.getElementById('teamTableBody');
  teamTableBody.innerHTML = ''; // Clear any existing data

  // Check if the data is available and valid
  if (data && Array.isArray(data)) {
    data.forEach(team => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${team.name}</td>
        <td>${team.balance}</td>
      `;
      teamTableBody.appendChild(row);
    });
  } else {
    document.getElementById('errorMessage').textContent = 'No data available';
  }
})
.catch(error => {
  console.error('Error fetching data:', error);
  document.getElementById('errorMessage').textContent = 'Error fetching team data.';
});

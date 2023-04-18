const apiToken: string =
  'BQAD805-7l_LYBEglqPbXd3GwuOz655ZqUC38jjX8DzaPNl9afemH1x-WX3omDRapQnOzznB8A5wgBudU20MFj3nOlm1CijJhf0c0LF_6h3aOyyVrPu1j9F4akc4UhwH6YXq7DmgtFQJDrxia8EghR0S8tElPlMHrLbGsLqjtO9jSUgPAzaFWDrLyKWS-LsVfqWlu3x09Z0YqccLg---4tX0YhGSxmInO6e8YOov_gaRZqLLfyL9icCNK5bzR0Cp9PA68ItcUVJqVzKXWDEKkwREomdXf4dMO22-8r9AC9h7TfySycNfS-5YLHq40-RzWRiDSvrezmqpApLjc7oJmUSZAZ3-9baOKbd-pyqn2_OW64c';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};

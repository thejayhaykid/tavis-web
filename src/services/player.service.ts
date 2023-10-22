import { environment } from '../environments/environment';

const getCompletedGames = (id: number): Promise<any> => {
  const { baseUrl } = environment.api;
  return fetch(`${baseUrl}player/getCompletedGames?playerId=${id}`).then(
    (response) => response.json()
  );
};

export { getCompletedGames };

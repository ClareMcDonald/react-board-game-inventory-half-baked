import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getGameById } from './services/fetch-utils';

export default function DetailPage() {
  const match = useRouteMatch();
  const [singleGame, setSingleGame] = useState({});

  // on mount, fetch and set in state the correct board game for this id (the id can be found in match.params using the correct react-router hook)
  useEffect(() => {
    async function fetchGame() {
      const matchGame = await getGameById(match.params.id);

      setSingleGame(matchGame);
    }

    fetchGame();

  }, [match]);

  return (
    <div className='detail'>
      <h1>{singleGame.title}</h1>
      <h2>A {singleGame.genre} game for {singleGame.min_players} to {singleGame.max_players} players</h2>
      <h3>by celebrated designer {singleGame.designer}</h3>
      <p>
        {singleGame.description}
      </p>
    </div>
  );
}

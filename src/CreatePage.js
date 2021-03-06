import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  const history = useHistory();
  // here's the state you'll need:
    // title;
  const [formTitle, setFormTitle] = useState('');
    // genre;
  const [formGenre, setFormGenre] = useState('');
    // designer;
  const [formDesigner, steformDesigner] = useState('');
    // description;
  const [formDescription, setFormDescription] = useState('');
    // minPlayers;
  const [formMinPlayers, setFormMinPlayers] = useState('');
    // maxPlayers;
  const [formMaxPlayers, setFormMaxPlayers] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    await createGame({
      title: formTitle,
      genre: formGenre,
      designer: formDesigner,
      description: formDescription,
      min_players: formMinPlayers,
      max_players: formMaxPlayers
    });

    // use history.push to send the user to the list page
    history.push('/board-games');
  }

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input required name='title' onChange={e => setFormTitle(e.target.value)} value={formTitle}/>
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required onChange={e => setFormGenre(e.target.value)} value={formGenre}>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input required name='designer' onChange={e => steformDesigner(e.target.value)} value={formDesigner}/>
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input required name='min_players' onChange={e => setFormMinPlayers(e.target.value)} value={formMinPlayers}/>
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input required name='max_players' onChange={e => setFormMaxPlayers(e.target.value)} value={formMaxPlayers} />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea required name='max_players' onChange={e => setFormDescription(e.target.value)} value={formDescription}/>
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}

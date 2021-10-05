import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import api from '../services/api';

function Profile() {
  const { usuario = 'carvalholeo' } = useParams();
  const [profile, setProfile] = useState({});
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setShowProfile(true)
  }, [profile]);

  useEffect(() => {
    api.get(`users/${usuario}`)
    .then(resposta => resposta.data)
    .then(resposta => setProfile(resposta))
    .catch(error => window.alert('TRAVOU TUDO, DEU PT NO SISTEMA'));
  }, [usuario])

  return (
    <main>
      {!showProfile &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showProfile &&
        (
          <>
            <h1>{profile.login}</h1>
            <p>{profile.bio}</p>
            <img src={profile.avatar_url} alt="" />
          </>
        )
      }
    </main>
  )
}

export default Profile;
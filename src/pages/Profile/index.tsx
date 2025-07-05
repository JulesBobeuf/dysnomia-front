import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useUserFavorites from '../../hooks/useUserProfile'
import Game from '../../components/Game'
import "./style.css"

const BASE_URL = import.meta.env.VITE_BASE_PATH_API

export default function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const favorites = useUserFavorites()
  const { t } = useTranslation()

  const handleDeleteAccount = async () => {
    try {
      await fetch(`${BASE_URL}/api/Users`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
        },
      })

      logout()
      navigate('/register')
    } catch (err) {
      console.error('Error deleting account:', err)
      alert(t('profile.delete_error'))
    }
  }

  if (!user) return null

  return (
    <div className="profile-container">
      <h2>{t('profile.title')}</h2>
      <p><strong>{t('profile.name')}:</strong> {user.name}</p>

      <h3>{t('profile.favorites')}</h3>
      <div className="games-list">
        {favorites?.length ? (
          favorites.map((game) => <Game key={game.id} game={game} />)
        ) : (
          <p>{t('profile.no_favorites')}</p>
        )}
      </div>

      <button onClick={handleDeleteAccount} className="delete-btn">
        {t('profile.delete_button')}
      </button>
    </div>
  )
}

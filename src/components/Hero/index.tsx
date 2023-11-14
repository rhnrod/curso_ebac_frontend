import { useDispatch } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { parseToBRL } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import { Banner, Infos } from './styled'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.old && <span>De {parseToBRL(game.prices.old)}</span>}
            {game.prices.current && (
              <p>Por {parseToBRL(game.prices.current)}</p>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero

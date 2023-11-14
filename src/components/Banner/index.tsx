import Tag from '../Tag'
import Button from '../Button'

import { parseToBRL } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

import { Image, Prices, Title } from './styles'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game?.name}</Title>
          <Prices>
            De <span>{parseToBRL(game.prices.old)}</span>
            <br />
            por apenas {parseToBRL(game.prices.current)}
          </Prices>
        </div>
        <Button
          title="Clique aqui para aproveitar esta oferta"
          to={`/product/${game.id}`}
          type="link"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner

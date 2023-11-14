import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        background="black"
        title="Ação"
        games={actionGames}
        isLoading={isLoadingAction}
        id="action"
      />
      <ProductsList
        background="gray"
        title="Esportes"
        games={sportGames}
        isLoading={isLoadingSport}
        id="sports"
      />
      <ProductsList
        background="black"
        title="Luta"
        games={fightGames}
        isLoading={isLoadingFight}
        id="fight"
      />
      <ProductsList
        background="gray"
        title="RPG"
        games={rpgGames}
        isLoading={isLoadingRPG}
        id="rpg"
      />
      <ProductsList
        background="black"
        title="Simulação"
        games={simulationGames}
        isLoading={isLoadingSimulation}
        id="simulation"
      />
    </>
  )
}

export default Categories

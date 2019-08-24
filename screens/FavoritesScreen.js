import React, { useEffect, useState } from 'react';
import { HeaderButton } from 'components/StyledButton';
import RefreshControlScrollView from 'components/RefreshControlScrollView';
import Hours from 'components/Hours';
import useAppState from 'hooks/useAppState';

export default function FavoritesScreen({ navigation }) {
  const [refreshState, setRefreshState] = useState(false);

  const refresh = async () => {
    await setRefreshState(true);
    setRefreshState(false);
  };

  useAppState({
    onForeground: refresh,
  });

  useEffect(() => {
    navigation.setParams({ refresh });
  }, [null]);

  return (
    <RefreshControlScrollView refresh={refresh}>
      <Hours refresh={refreshState} bus="C6" stop="Coeur de Courrouze" destination="Cesson-Sévigné" />
      <Hours refresh={refreshState} bus="C2" stop="République" destination="Saint-Grégoire" />
      <Hours refresh={refreshState} bus="C2" stop="Champ Daguet" destination="Haut Sancé" />
      <Hours refresh={refreshState} bus="C6" stop="République" destination="Aéroport" />
      <Hours refresh={refreshState} bus="C3" stop="République" destination="Saint-Laurent" />
      <Hours refresh={refreshState} bus="C3" stop="Le Blizz" destination="Henri Fréville" />
      <Hours refresh={refreshState} bus="C5" stop="République" destination="Lycée Bréquigny" />
      <Hours refresh={refreshState} bus="14" stop="La Plesse" destination="Beaulieu" />
      <Hours refresh={refreshState} bus="78" stop="Edonia" destination="Rennes Villejean-Université" />
      <Hours refresh={refreshState} bus="57" stop="République" destination="Bruz" />
    </RefreshControlScrollView>
  );
}

FavoritesScreen.navigationOptions = ({ navigation }) => ({
  title: 'Favorites',
  headerRight: <HeaderButton onPress={navigation.getParam('refresh')} title="Refresh" />,
});

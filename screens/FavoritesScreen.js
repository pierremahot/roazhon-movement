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
    </RefreshControlScrollView>
  );
}

FavoritesScreen.navigationOptions = ({ navigation }) => ({
  title: 'Favorites',
  headerRight: <HeaderButton onPress={navigation.getParam('refresh')} title="Refresh" />,
});

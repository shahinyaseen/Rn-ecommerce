import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
import {BackButtonBar, Icon} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function SubCategory({navigation, route}) {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();

  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <StatusBar backgroundColor={theme.ACCENT} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <PageWrapper>
          <Header>
            <CategoryTitle>{route.params.category}</CategoryTitle>
          </Header>
          {route.params.submenu.map((item, index) => {
            return (
              <SubMenuWrapper
                key={index}
                onPress={() => navigation.navigate('product', item)}>
                <MenuItemText>{item.name}</MenuItemText>
                <MenuItemIcon
                  name="arrow-right"
                  size={28}
                  color={theme.TEXT_COLOR}
                />
              </SubMenuWrapper>
            );
          })}
        </PageWrapper>
      </ScrollView>
      <BackButtonBar />
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
`;
const PageWrapper = styled.View``;
const Header = styled.View`
  padding-horizontal: ${p => p.theme.sWidth * 0.02051}px;
  background-color: ${p => p.theme.ACCENT};
  padding-vertical: ${p => p.theme.sWidth * 0.02051}px;
`;
const CategoryTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${p => p.theme.ACCENT_TEXT};
  text-align: center;
`;

//Submenu
const SubMenuWrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 25px;
  padding-vertical: 16px;
  border-top-width: 1px;
  border-color: ${p => p.theme.WHITE_SMOKE};
`;
const MenuItemText = styled.Text`
  font-size: 16px;
  font-family: 'Poppins';
  color: ${p => p.theme.TEXT_COLOR};
`;
const MenuItemIcon = styled(Icon)``;

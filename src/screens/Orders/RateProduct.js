import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import BackButtonBar from '../../components/Footer/BackButtonBar';
import {product} from '../../assets/index';
import TextBox from '../../components/Input/TextBox';
import {useStateValue} from '../../contextAPI/GlobelState';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast from '../../components/Toast/Toast';

export default function RateProduct() {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();
  const {ToastAlert, toast} = Toast();
  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <ToastAlert />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <PageWrapper>
          <Header>
            <Title>Rate the Product</Title>
          </Header>
          <TrackProductWrap>
            <ImageContainer>
              <ImageCard source={product} resizeMode={'contain'} />
            </ImageContainer>
            <DetailContainer>
              <TopSection>
                <Brand>Redmi</Brand>

                <ItemTitle>
                  Redmi 10 Prime (Astral White 6GB RAM 128GB ROM |Helio G88 with
                  extendable RAM Upto 2GB |FHD+ 90Hz Adaptive Sync Display)
                </ItemTitle>
              </TopSection>
            </DetailContainer>
          </TrackProductWrap>
          <RatingStarWrap
            onPress={() => toast('Slot is not available', 'warning', 3000)}>
            <Text>Star Pending</Text>
          </RatingStarWrap>
          <FormGroupWrap>
            <FormGroupItem>
              <TextBox
                label="Title"
                placeholder="Enter here"
                width={theme.sWidth * 0.8769}
              />
            </FormGroupItem>
            <FormGroupItem>
              <TextBox
                label="Write Review"
                placeholder="Enter here"
                width={theme.sWidth * 0.8769}
                multiline
                numberOfLines={5}
              />
            </FormGroupItem>
            <BtnGroupwrap>
              <CancelBtn>
                <CancelBtnText>Cancel</CancelBtnText>
              </CancelBtn>
              <SaveBtn>
                <SaveBtnText>Save</SaveBtnText>
              </SaveBtn>
            </BtnGroupwrap>
          </FormGroupWrap>
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
  padding-horizontal: 25px;
  padding-top: 25px;
`;
const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${p => p.theme.TEXT_COLOR};
`;

//trackitem
const TrackProductWrap = styled.View`
  border-color: ${p => p.theme.ITEM_BORDER};
  border-bottom-width: 1px;
  border-top-width: 1px;
  padding-horizontal: 25px;
  padding-vertical: 19px;
  margin-top: 16px;
  flex-direction: row;
`;
const ImageContainer = styled.View`
  margin-right: 12px;
  width: ${p => p.theme.sWidth * (45 * p.theme.PX_WIDTH)}px;
  padding-vertical: 10px;
`;
const ImageCard = styled.Image`
  width: null;
  height: 70;
`;

const DetailContainer = styled.View`
  width: ${p => p.theme.sWidth * (281 * p.theme.PX_WIDTH)}px;
`;

const TopSection = styled.View``;

const Brand = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.STRIKE_TEXT};
  margin-right: 16px;
`;

const ItemTitle = styled.Text`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins-SemiBold';

  color: ${p => p.theme.TEXT_COLOR};
`;

//Star
const RatingStarWrap = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`;

const FormGroupWrap = styled.View`
  padding-horizontal: 25px;
  margin-top: 30px;
`;
const FormGroupItem = styled.View`
  margin-bottom: 16px;
`;

//buttons
const BtnGroupwrap = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${p => p.theme.sWidth * 0.8769};
  margin-top: 16px;
`;
const CancelBtn = styled.TouchableOpacity`
  width: ${p => p.theme.sWidth * (166 * p.theme.PX_WIDTH)}px;
  background-color: ${p => p.theme.DEFAULT};
  border-radius: 12px;
  padding-vertical: 8px;
`;

const CancelBtnText = styled.Text`
  color: ${p => p.theme.DEFAULT_TEXT};
  text-align: center;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

const SaveBtn = styled.TouchableOpacity`
  width: ${p => p.theme.sWidth * (166 * p.theme.PX_WIDTH)}px;
  background-color: ${p => p.theme.PRIMARY};
  border-radius: 12px;
  padding-vertical: 8px;
`;

const SaveBtnText = styled.Text`
  text-align: center;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${p => p.theme.PRIMARY_TEXT};
`;

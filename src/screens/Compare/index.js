import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import {Header, PButtonBar} from '../../components';
import {product} from '../../assets';
import {Td, Thead, Tr} from '../../components/Table/Table';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

let data = [
  {
    id: 1,
    name: 'Rear Camera Lens 1',
    camera: '48 megapixels',
    dt1: '50',
    dt2: '50',
    dt3: '50',
  },
  {
    id: 2,
    name: 'Rear Camera Lens 2',
    camera:
      'Quad Rear Camera (48 MP + 16 MP + 5 MP + 2 MP) | 16 MP Front Camera',
    dt1: 'Front',
    dt2: 'Triple Rear Camera (50 MP + 8 MP + 2 MP) | 32 MP Front Camera',
    dt3: 'Front',
  },
  {
    id: 3,
    name: 'Screen Size',
    camera: '6.55 inches',
    dt1: '6.62 inches',
    dt2: '6.43 inches',
    dt3: '6.62 inches',
  },
  {
    id: 4,
    name: 'Screen Type',
    camera: 'AMOLED',
    dt1: 'AMOLED',
    dt2: 'AMOLED',
    dt3: 'AMOLED',
  },
  {
    id: 5,
    name: 'Battery Power (In mAH)',
    camera: '4500',
    dt1: '4500',
    dt2: '4500',
    dt3: '4500',
  },
  {id: 6, name: 'RAM', camera: '8 GB', dt1: '8 GB', dt2: '8 GB', dt3: '8 GB'},
  {
    id: 7,
    name: 'Inbuilt Storage (in GB)',
    camera: '128',
    dt1: '0',
    dt2: '128',
    dt3: '128',
  },
  {
    id: 8,
    name: 'Expandable Storage',
    camera: '128 GB',
    dt1: '128 GB',
    dt2: '128 GB',
    dt3: '128 GB',
  },
  {
    id: 9,
    name: 'Processor Brand',
    camera: 'Qualcomm Snapdragon 870',
    dt1: 'Qualcomm Snapdragon 870',
    dt2: 'MediaTek Dimensity 1200-AI',
    dt3: 'Qualcomm Snapdragon 870',
  },
  {
    id: 10,
    name: 'Operating System',
    camera: 'Android 11',
    dt1: 'OxygenOS',
    dt2: 'Android 11.3 OxygenOS',
    dt3: 'OxygenOS',
  },
  {
    id: 11,
    name: 'Warranty Details',
    camera:
      '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
    dt1: '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
    dt2: '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
    dt3: '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
  },
];
export default function Compare() {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();
  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag">
        <Productrow>
          <CompareItem>
            <Title>OnePlus 9R 5G (Carbon Black, 8...</Title>
            <Price>₹ 39,999</Price>
          </CompareItem>
          <CompareItem>
            <Title>OnePlus 9R 5G (Carbon Black, 8...</Title>
            <Price>₹ 39,999</Price>
          </CompareItem>
          <CompareItem>
            <Title>OnePlus 9R 5G (Carbon Black, 8...</Title>
            <Price>₹ 39,999</Price>
          </CompareItem>
        </Productrow>

        <MainTitle>Compare Details</MainTitle>
        <TableWrapper>
          {data.map((items, i) => {
            return (
              <Tr>
                <TableTh>{items.name}</TableTh>
                <DetailContent>
                  <TableTd>{items.camera}</TableTd>
                  <TableTd>{items.dt1}</TableTd>
                  <TableTd>{items.dt2}</TableTd>
                  {/* <TableTd>{items.dt3}</TableTd> */}
                </DetailContent>
              </Tr>
            );
          })}
        </TableWrapper>
      </ScrollView>
      <PButtonBar />
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
  width: 100%;
  position: relative;
`;

const Productrow = styled.View`
  flex-direction: row;
  margin-bottom: 32px;
`;

const CompareItem = styled.View`
  width: ${p => p.theme.sWidth * (130 * p.theme.PX_WIDTH)}px;
  padding: 8px;
  border-width: 1px;
  border-color: ${p => p.theme.ITEM_BORDER};
`;
const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 11px;
  line-height: 19px;
  color: ${p => p.theme.TEXT_COLOR};
`;
const Price = styled.Text`
  font-family: 'Poppins-SemiBold';
  color: ${p => p.theme.BLUE};
`;

const MainTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 20px;
  color: ${p => p.theme.TEXT_COLOR};
  padding-horizontal: ${p => p.theme.sWidth * 0.0615}px;
`;

//Table
const TableWrapper = styled.View`
  height: 100%;
  margin-top: 16px;
  margin-bottom: 20px;
`;
const TableTh = styled(Thead)``;
const TableTd = styled(Td)``;

const DetailContent = styled.View`
  background-color: ${p => p.theme.BACKGROUND};
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.ITEM_BORDER};
`;

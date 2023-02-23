import {View, Text, ScrollView} from 'react-native';
import React, {useState, useMemo} from 'react';
import {
  Button,
  ButtonIcon,
  ButtonOutline,
  TextBox,
  TextBoxIcon,
  ModalSelect,
  Icon,
  WishBtn,
  EyeBtn,
  Pagination,
  ProductItem,
  ProductOffer,
  ProductRowOffer,
  ProductRow,
  Accordion,
  LimitedDeals,
} from '../components';
import styled from 'styled-components/native';
import {useStateValue} from '../contextAPI/GlobelState';
import ProductSingle from '../screens/Product/ProductSingle';
import {product} from '../assets';
export default function Widget() {
  const [{theme}] = useStateValue();
  const [dropdown, setDropdown] = useState(null);
  const [wishBtn, setWishBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);

  let paginationData = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd'},
    {id: 5, name: 'e'},
    {id: 6, name: 'f'},
    {id: 7, name: 'g'},
    {id: 8, name: 'h'},
    {id: 9, name: 'i'},
    {id: 10, name: 'j'},
    {id: 11, name: 'k'},
    {id: 12, name: 'l'},
    {id: 13, name: 'm'},
    {id: 14, name: 'n'},
    {id: 15, name: 'o'},
    {id: 16, name: 'p'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 17, name: 'q'},
    {id: 18, name: 'r'},
    {id: 19, name: 's'},
    {id: 20, name: 't'},
    {id: 21, name: 'u'},
    {id: 22, name: 'v'},
    {id: 23, name: 'w'},
    {id: 24, name: 'x'},
    {id: 25, name: 'y'},
    {id: 26, name: 'z'},
    {id: 27, name: 'aa'},
    {id: 28, name: 'bb'},
    {id: 29, name: 'cc'},
    {id: 30, name: 'dd'},
    {id: 31, name: 'ee'},
    {id: 32, name: 'ff'},
    {id: 33, name: 'gg'},
    {id: 34, name: 'hh'},
    {id: 35, name: 'ii'},
    {id: 36, name: 'jj'},
    {id: 37, name: 'kk'},
    {id: 38, name: 'll'},
    {id: 39, name: 'mm'},
    {id: 40, name: 'nn'},
    {id: 41, name: 'oo'},
    {id: 42, name: 'pp'},
    {id: 43, name: 'qq'},
    {id: 44, name: 'rr'},
    {id: 45, name: 'ss'},
    {id: 46, name: 'tt'},
    {id: 47, name: 'uu'},
    {id: 48, name: 'vv'},
    {id: 49, name: 'ww'},
    {id: 50, name: 'xx'},
    {id: 51, name: 'yy'},
    {id: 52, name: 'zz'},
    {id: 53, name: 'aaa'},
    {id: 54, name: 'bbb'},
    {id: 55, name: 'ccc'},
    {id: 56, name: 'ddd'},
    {id: 57, name: 'eee'},
    {id: 58, name: 'fff'},
    {id: 59, name: 'ggg'},
    {id: 60, name: 'hhh'},
    {id: 61, name: 'iii'},
    {id: 62, name: 'jjj'},
    {id: 63, name: 'kkk'},
    {id: 64, name: 'lll'},
  ];
  let items = [
    {
      id: 1,
      image: product,
      content: 'Mi 360° Home Security Camera 1080P l Full HD',
      percentage: '25',
      offprice: '1000',
      rprice: '2000',
    },
    {
      id: 2,
      image: product,
      content:
        'Mi 360° Home Security Camera 1080P l Full HD Picture l AI Powered Motion Detection Mi 360° Home Security Camera 1080P l Full HD Picture l AI Powered Motion Detection',
      percentage: '25',
      offprice: '1000',
      rprice: '2000',
    },
  ];
  const productitems = [
    {
      id: 1,
      brand: 'sumsung',
      image: product,
      description:
        'Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate',
      rating: '4.4',
      ratingcount: '10,04',
      price: '1200',
      rprice: '15000',
    },
    {
      id: 2,
      brand: 'sumsung',
      image: product,
      description:
        'Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate',
      rating: '4.4',
      ratingcount: '10,04',
      price: '1200',
      rprice: '15000',
    },
    {
      id: 3,
      brand: 'sumsung',
      image: product,
      description:
        'Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate',
      rating: '4.4',
      ratingcount: '10,04',
      price: '1200',
      rprice: '15000',
    },
    {
      id: 4,
      brand: 'sumsung',
      image: product,
      description:
        'Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate',
      rating: '4.4',
      ratingcount: '10,04',
      price: '1200',
      rprice: '15000',
    },
  ];
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 5;
    const lastPageIndex = firstPageIndex + 5;
    return paginationData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <Wrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        style={{flex: 1}}>
        <ProductSingle />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            width: '100%',
            padding: 5,
          }}>
          <Accordion title="List Data">
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              neque asperiores quis corrupti eveniet quibusdam, odio qui veniam.
              Obcaecati quia placeat doloribus excepturi impedit totam eos
              repellat labore iure consectetur.
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              neque asperiores quis corrupti eveniet quibusdam, odio qui veniam.
              Obcaecati quia placeat doloribus excepturi impedit totam eos
              repellat labore iure consectetur.
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              neque asperiores quis corrupti eveniet quibusdam, odio qui veniam.
              Obcaecati quia placeat doloribus excepturi impedit totam eos
              repellat labore iure consectetur.
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              neque asperiores quis corrupti eveniet quibusdam, odio qui veniam.
              Obcaecati quia placeat doloribus excepturi impedit totam eos
              repellat labore iure consectetur.
            </Text>
          </Accordion>
          <Accordion title="List Data">
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              neque asperiores quis corrupti eveniet quibusdam, odio qui veniam.
              Obcaecati quia placeat doloribus excepturi impedit totam eos
              repellat labore iure consectetur.
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              neque asperiores quis corrupti eveniet quibusdam, odio qui veniam.
              Obcaecati quia placeat doloribus excepturi impedit totam eos
              repellat labore iure consectetur.
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              neque asperiores quis corrupti eveniet quibusdam, odio qui veniam.
              Obcaecati quia placeat doloribus excepturi impedit totam eos
              repellat labore iure consectetur.
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              neque asperiores quis corrupti eveniet quibusdam, odio qui veniam.
              Obcaecati quia placeat doloribus excepturi impedit totam eos
              repellat labore iure consectetur.
            </Text>
          </Accordion>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          {productitems.map((item, index) => {
            return (
              <ProductItem
                key={index}
                brand="samsung"
                image={item.image}
                description={item.description}
                rating={item.rating}
                ratingcount={item.ratingcount}
                price={item.price}
                rprice={item.rprice}
              />
            );
          })}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginVertical: 20,
          }}>
          {productitems.map((item, index) => {
            return (
              <ProductRow
                key={index}
                brand="samsung"
                image={item.image}
                description={item.description}
                rating={item.rating}
                ratingcount={item.ratingcount}
                price={item.price}
                rprice={item.rprice}
              />
            );
          })}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <ProductOffer
            image={product}
            percentage="25"
            offprice="1000"
            rprice="3000"
            content="Mi 360° Home Security Camera 1080P l Full HD Picture l AI Powered Motion Detection Mi 360° Home Security Camera 1080P l Full HD Picture l AI Powered Motion Detection"
          />
          {/* <ProductOffer /> */}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginVertical: 20,
          }}>
          <ProductRowOffer />
        </View>
        <View
          style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <Button
            isDefault
            name="Button"
            width={theme.sWidth * theme.BTN_WIDTH}
          />
          <Button
            isPrimary
            name="Button"
            width={theme.sWidth * theme.BTN_WIDTH}
          />
          <ButtonOutline
            isPrimary
            name="Button"
            width={theme.sWidth * theme.BTN_WIDTH}
          />
        </View>
        <View
          style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <Button
            isAccent
            name="Button"
            width={theme.sWidth * theme.BTN_WIDTH}
            isRound
          />
          <Button
            isPrimary
            name="Button"
            width={theme.sWidth * theme.BTN_WIDTH}
            isRound
          />
          <ButtonOutline
            isPrimary
            name="Button"
            width={theme.sWidth * theme.BTN_WIDTH}
            isRound
          />
        </View>
        <View
          style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <ButtonIcon
            isPrimary
            name="Button"
            width={theme.sWidth * theme.BTN_WIDTH}
            icon="profile"
          />
          <ButtonIcon
            isAccent
            name="Button"
            width={theme.sWidth * theme.BTN_WIDTH}
            icon="profile"
          />
          <ButtonIcon
            isAccent
            name="Button"
            width={theme.sWidth * theme.BTN_WIDTH}
            icon="profile"
            isRound
          />
        </View>
        <View
          style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <Button
            isDefault
            name="Quick View"
            width={theme.sWidth * theme.BTN_WIDTH}
            isRound
          />
          <WishBtn isActive={wishBtn} onPress={() => setWishBtn(!wishBtn)} />
          <EyeBtn />
        </View>
        <View
          style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Pagination
            currentPage={currentPage}
            totalCount={paginationData.length}
            pageSize={10}
            onPageChange={page => setCurrentPage(page)}
          />
        </View>
        <View
          style={{
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <TextBox
            label="Name"
            placeholder="Enter Name"
            width={theme.sWidth * 0.9}
          />
          <TextBox
            label="Address"
            placeholder="Enter Address"
            width={theme.sWidth * 0.9}
            multiline
            numberOfLines={5}
          />
          <TextBoxIcon
            label="Name"
            placeholder="Enter Name"
            width={theme.sWidth * 0.9}
            icon="search"
          />
          <ModalSelect
            title="Sort"
            label="Status"
            placeholder="Select"
            width={theme.sWidth * 0.9}
            data={[
              {label: 'All', value: 'All'},
              {label: 'All2', value: 'All2'},
              {label: 'All3', value: 'All3'},
              {label: 'All4', value: 'All4'},
              {label: 'All1', value: 'All1'},
              {label: 'All5', value: 'All5'},
              {label: 'All6', value: 'All6'},
              {label: 'All7', value: 'All7'},
            ]}
            selected={dropdown}
            onSelect={value => setDropdown(value)}
          />
          <Icon name="categories" />
        </View>

        <View>
          <LimitedDeals />
        </View>
      </ScrollView>
    </Wrapper>
  );
}
const Wrapper = styled.SafeAreaView`
  flex-grow: 1;
  background-color: ${p => p.theme.BACKGROUND};
`;

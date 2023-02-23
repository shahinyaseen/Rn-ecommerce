import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useMemo, useRef} from 'react';
import {useStateValue} from '../../contextAPI/GlobelState';
import styled from 'styled-components/native';
import {
  BackButtonBar,
  Header,
  ProductItem,
  ProductRow,
  ProductRowOffer,
  Pagination,
  Icon,
  ModalSort,
  Modal,
  PButtonBar,
} from '../../components';
import {product, ptron} from '../../assets';
import Filter from '../../components/Filters/Filter';
import FilterModal from '../../components/Modal/FilterModal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Product({navigation, route}) {
  const [{theme}, dispatch] = useStateValue();
  const insets = useSafeAreaInsets();
  const [currentPage, setCurrentPage] = useState(3);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isBrand, setIsBrand] = useState([]);
  const [isPrice, setIsPrice] = useState([]);
  const [isReview, setIsReview] = useState([]);
  const [isOffer, setIsOffer] = useState([]);
  const [isMenu, setIsMenu] = useState([]);
  const scrollViewRef = useRef();
  const clearAllFilter = () => {
    setIsPrice([]);
    setIsReview([]);
    setIsBrand([]);
    setIsOffer([]);
    setIsMenu([]);
  };

  const [selectedOption, setSelectedOption] = useState('Price-Low to High');
  let productitems = [
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
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
  let productrowitems = [
    {
      id: 1,
      brand: 'Boat',
      image: ptron,
      description:
        'Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate',
      rating: '4.4',
      ratingcount: '10,04',
      price: '1200',
      rprice: '15000',
    },
    {
      id: 2,
      brand: 'Boat',
      image: ptron,
      description:
        'Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate',
      rating: '4.4',
      ratingcount: '10,04',
      price: '1200',
      rprice: '15000',
    },
  ];
  let sortData = [
    {id: 1, label: 'Popularity'},
    {id: 2, label: 'Price-Low to High'},
    {id: 3, label: 'Price-High to Low'},
    {id: 4, label: 'Newest First'},
    {id: 5, label: 'Customer Review'},
  ];
  let priceData = [
    {id: 1, label: 'under 10000', value: 'under 10000'},
    {id: 2, label: 'under 15000', value: 'under 15000'},
    {id: 3, label: 'under 25000', value: 'under 25000'},
    {id: 4, label: 'under 50000', value: 'under 50000'},
  ];
  let brandData = [
    {id: 1, label: 'Apple', value: 'Apple'},
    {id: 2, label: 'Samsung', value: 'Samsung'},
    {id: 3, label: 'Vivo', value: 'Vivo'},
    {id: 4, label: 'Oppo', value: 'Oppo'},
    {id: 5, label: 'Realme', value: 'Realme'},
    {id: 6, label: 'Nokia', value: 'Nokia'},
    {id: 7, label: 'Xiaomi', value: 'Xiaomi'},
    {id: 8, label: 'Oneplus', value: 'Oneplus'},
    {id: 9, label: 'Huawei', value: 'Huawei'},
    {id: 10, label: 'Lenovo', value: 'Lenovo'},
  ];
  let reviewData = [
    {id: 1, label: 4, value: 4},
    {id: 2, label: 3, value: 3},
    {id: 3, label: 2, value: 2},
    {id: 4, label: 1, value: 1},
  ];
  let offerData = [
    {id: 1, label: 'Up to 80% off', value: 'Up to 80% off'},
    {id: 2, label: 'Up to 70% off', value: 'Up to 70% off'},
    {id: 3, label: 'Up to 60% off', value: 'Up to 60% off'},
    {id: 4, label: 'Up to 50% off', value: 'Up to 50% off'},
    {id: 5, label: 'Up to 40% off', value: 'Up to 40% off'},
    {id: 6, label: 'Up to 30% off', value: 'Up to 30% off'},
    {id: 7, label: 'Up to 20% off', value: 'Up to 20% off'},
    {id: 8, label: 'Up to 10% off', value: 'Up to 10% off'},
  ];
  let menuData = [
    {id: 1, label: 'Home', value: 'Home'},
    {id: 2, label: 'Phones', value: 'Phones'},
    {id: 3, label: 'Laptops', value: 'Laptops'},
    {id: 4, label: 'Tablets', value: 'Tablets'},
    {id: 5, label: 'Watches', value: 'Watches'},
    {id: 6, label: 'Accessories', value: 'Accessories'},
    {id: 7, label: 'Cameras', value: 'Cameras'},
    {id: 8, label: 'Speakers', value: 'Speakers'},
    {id: 9, label: 'Headphones', value: 'Headphones'},
    {id: 10, label: 'Earphones', value: 'Earphones'},
  ];
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 5;
    const lastPageIndex = firstPageIndex + 5;
    return productitems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const onOptionClicked = value => () => {
    setSelectedOption(value);
  };
  const onScroll = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };

  return (
    <Wrapper
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      <StatusBar backgroundColor="transparent" />
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        ref={scrollViewRef}>
        <PageWrapper>
          <MainTitleWrapper>
            <Title>{route.params.name}</Title>
          </MainTitleWrapper>

          <StatusWrap>
            <SortHead>{selectedOption}</SortHead>
          </StatusWrap>

          <ProductWrapper>
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
                  onPress={() => navigation.navigate('product-single', item)}
                />
              );
            })}
          </ProductWrapper>
          {productrowitems.map((item, index) => {
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
          <PaginationWrap>
            <Pagination
              currentPage={currentPage}
              totalCount={productitems.length}
              pageSize={4}
              onPageChange={page => setCurrentPage(page)}
            />
          </PaginationWrap>
        </PageWrapper>
      </ScrollView>
      <FilterBtnInner>
        <FilterBtnAction>
          <ButtonConatiner onPress={() => setIsFilterOpen(!isFilterOpen)}>
            <Icon name="filter" color={theme.PRIMARY_TEXT} size={20} />
            <FilterText>Filter</FilterText>
          </ButtonConatiner>
          <ButtonLine />
          <ButtonConatiner onPress={() => setIsSortOpen(!isSortOpen)}>
            <Icon name="sort" color={theme.PRIMARY_TEXT} size={20} />
            <FilterText>Sort</FilterText>
          </ButtonConatiner>
        </FilterBtnAction>
      </FilterBtnInner>
      <ModalSort
        title="Sort"
        visible={isSortOpen}
        data={sortData}
        active={selectedOption}
        show={onOptionClicked}
        close={value => setIsSortOpen(value)}
      />
      <FilterModal
        visible={isFilterOpen}
        close={() => setIsFilterOpen(!isFilterOpen)}>
        <ModalContent>
          <Filter
            closeFilter={() => setIsFilterOpen(false)}
            isBrand={isBrand}
            setIsBrand={setIsBrand}
            brandFilterData={brandData}
            isPrice={isPrice}
            setIsPrice={setIsPrice}
            priceFilterData={priceData}
            isReview={isReview}
            setIsReview={setIsReview}
            reviewFilterData={reviewData}
            isOffer={isOffer}
            setIsOffer={setIsOffer}
            offerFilterData={offerData}
            isMenu={isMenu}
            setIsMenu={setIsMenu}
            menuFilterData={menuData}
            clearAll={clearAllFilter}
          />
        </ModalContent>
      </FilterModal>
      <PButtonBar onScrollBtn={onScroll} />
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
  position: relative;
`;
const PageWrapper = styled.View`
  padding-vertical: 24px;
  padding-horizontal: 24px;
`;
const MainTitleWrapper = styled.View``;
const Title = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 24px;
  color: ${p => p.theme.TEXT_COLOR};
  text-align: center;
`;
const StatusWrap = styled.View`
  margin-top: 32px;
`;
const SortHead = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: ${p => p.theme.TEXT_COLOR};
  text-decoration: underline;
`;

const ProductWrapper = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

//pagination
const PaginationWrap = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  margin-bottom: 35px;
`;
//Filter
const FilterText = styled.Text`
  color: ${p => p.theme.PRIMARY_TEXT};
  font-size: 16px;
  margin-left: 12px;
  ${
    '' /* border-bottom-color: ${p => (p.Active ? p.theme.ACCENT : p.theme.RED)}; */
  }
  ${'' /* border-bottom-width: 4px; */}
`;

const FilterBtnInner = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const FilterBtnAction = styled.View`
  position: absolute;
  bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${p => p.theme.PRIMARY};
  border-radius: 10px;
  width: ${p => p.theme.sWidth * (200 * p.theme.PX_WIDTH)}px;
  padding-vertical: 10px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  shadow-color: black;
  shadow-offset: 1px -1px;
  elevation: 9;
`;
const ButtonConatiner = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 14px;
`;
const ButtonLine = styled.View`
  border-color: ${p => p.theme.STRIKE_TEXT};
  border-width: 2px;
`;

//modal

const ModalContent = styled.View`
  flex: 1;
  background-color: ${p => p.theme.BACKGROUND};
  border-radius: 10px;
  flex-direction: column;
  height: ${p => p.theme.sHeight * 0.6}px;
`;

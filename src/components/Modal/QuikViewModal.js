import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Animated,
  Modal,
  Pressable,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';
import {Icon} from '../Icon';

export default function QuikViewModal({close, visible, children}) {
  const [{theme}] = useStateValue();
  const [{quickView}, dispatch] = useStateValue();
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  const clearState = () => {
    dispatch({type: 'SET_QUICKVIEW', details: false});
    // dispatch({ type: "SET_QUICKVIEW_DATA", details: [] });
  };
  return (
    <Modal
      transparent
      visible={showModal}
      // animationType="fade"
    >
      <ModalBackGround>
        <Animated.View
          activeOpacity={1}
          style={[
            {
              transform: [{scale: scaleValue}],
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <InnerContent>
            <CloseBtn onPress={close}>
              <CloseIcon name="close" size={20} color={theme.TEXT_COLOR} />
            </CloseBtn>

            {/* <Pressable
            onPress={close}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Pressable activeOpacity={1} style={styles.modalContainer}>
              {children}
            </Pressable>
          </Pressable> */}
            {children}
          </InnerContent>
        </Animated.View>
      </ModalBackGround>
    </Modal>
  );
}
const ModalBackGround = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  /* justify-content: center; */
  /* align-items: center; */
`;
const styles = StyleSheet.create({
  modalContainer: {
    width: '95%',
    // paddingVertical: 20,
    borderRadius: 10,
  },
});

const CloseIcon = styled(Icon)``;

const InnerContent = styled.View`
  position: relative;
  width: ${p => p.theme.sWidth * 0.917}px;
`;

const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  top: 20;
  right: 20px;
  z-index: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

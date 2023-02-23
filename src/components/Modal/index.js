import React from 'react';
import {
  StyleSheet,
  Animated,
  Modal,
  Pressable,
} from 'react-native';
import styled from 'styled-components/native';
import {useStateValue} from '../../contextAPI/GlobelState';

export default function ModalPopUp({close, visible, children}) {
  const [{theme}] = useStateValue();
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
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
  return (
    <Modal
      transparent
      visible={showModal}
      // animationType="fade"
      onRequestClose={close}>
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
          <Pressable
            onPress={close}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Pressable activeOpacity={1} style={styles.modalContainer}>
              {children}
            </Pressable>
          </Pressable>
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
    width: '90%',
    // paddingVertical: 20,
    borderRadius: 10,
  },
});

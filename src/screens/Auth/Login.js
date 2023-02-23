import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Icon, TextBox, Button, TextBoxBtn} from '../../components';
import {useStateValue} from '../../contextAPI/GlobelState';
export default function Login({navigation}) {
  const [{theme}] = useStateValue();
  const [page, setPage] = React.useState(1);
  const [changePhoneOTP, isChangePhoneOTP] = React.useState(false);
  const LoginForm = () => {
    return (
      <View>
        <FormTitle>Login</FormTitle>
        <FormGroup>
          <TextBox placeholder="Mobile" width={theme.sWidth * 0.9} />
        </FormGroup>
        <FormGroup>
          <TextBox
            placeholder="Password"
            width={theme.sWidth * 0.9}
            secureTextEntry
          />
        </FormGroup>
        <Forgot>
          <TouchableOpacity onPress={() => setPage(4)}>
            <ForgotText>Forgot Password ?</ForgotText>
          </TouchableOpacity>
        </Forgot>
        <TermsPolicy>
          <TermsPolicyText>
            By continuing, you agree to Our <TextBold>Terms of Use</TextBold>{' '}
            and <TextBold>Privacy Policy</TextBold>
          </TermsPolicyText>
        </TermsPolicy>
        <Button
          isAccent
          name="Login"
          width={theme.sWidth * 0.9}
          style={{marginTop: 10}}
        />
        <TextOr>OR</TextOr>
        <Button
          isAccentSecondary
          name="Request OTP"
          width={theme.sWidth * 0.9}
          onPress={() => setPage(3)}
        />

        <TouchableOpacity onPress={() => setPage(2)} style={{marginTop: 30}}>
          <NewAccText>
            New here?{' '}
            <Text
              style={{
                textDecorationLine: 'underline',
                textDecorationColor: theme.TEXT_COLOR,
              }}>
              Create Account
            </Text>
          </NewAccText>
        </TouchableOpacity>
      </View>
    );
  };
  const SignUp = () => {
    return (
      <View>
        <FormTitle>Create Account</FormTitle>
        <FormGroup>
          <TextBoxBtn
            placeholder="Mobile"
            width={theme.sWidth * 0.9}
            // btnAction={}
            btnName="Verify"
            btnIsAccentSecondary
          />
        </FormGroup>
        <ResendWrapper>
          <ResendText>
            OTP has send to{' '}
            <Text style={{fontFamily: 'Poppins-Bold'}}>9876 543 210</Text>
          </ResendText>

          <TouchableOpacity>
            <BtnText>Change</BtnText>
          </TouchableOpacity>

          <TouchableOpacity>
            <BtnText>Resend</BtnText>
          </TouchableOpacity>
        </ResendWrapper>
        <FormGroup>
          <TextBox placeholder="Enter OTP" width={theme.sWidth * 0.9} />
        </FormGroup>
        <FormGroup>
          <TextBox placeholder="Enter Name" width={theme.sWidth * 0.9} />
        </FormGroup>
        <FormGroup>
          <TextBox placeholder="Set Password" width={theme.sWidth * 0.9} />
        </FormGroup>
        <TermsPolicy>
          <TermsPolicyText>
            By continuing, you agree to Our <TextBold>Terms of Use</TextBold>{' '}
            and <TextBold>Privacy Policy</TextBold>
          </TermsPolicyText>
        </TermsPolicy>

        <Button
          isAccent
          name="Sign-Up"
          width={theme.sWidth * 0.9}
          style={{marginTop: 10}}
        />
        <TouchableOpacity onPress={() => setPage(1)} style={{marginTop: 30}}>
          <NewAccText>
            Have an Account ?{' '}
            <Text
              style={{
                textDecorationLine: 'underline',
                textDecorationColor: theme.TEXT_COLOR,
              }}>
              Login Now
            </Text>
          </NewAccText>
        </TouchableOpacity>
      </View>
    );
  };
  const OtpLogin = () => {
    return (
      <View>
        <FormTitle>Login</FormTitle>
        {!changePhoneOTP && (
          <ResendWrapper>
            <ResendText>
              OTP has send to{' '}
              <Text style={{fontFamily: 'Poppins-Bold'}}>9876 543 210</Text>
            </ResendText>
            <TouchableOpacity
              onPress={() => {
                isChangePhoneOTP(!changePhoneOTP);
              }}>
              <BtnText>Change</BtnText>
            </TouchableOpacity>
            <TouchableOpacity>
              <BtnText>Resend</BtnText>
            </TouchableOpacity>
          </ResendWrapper>
        )}
        <FormGroup>
          {changePhoneOTP ? (
            <TextBox placeholder="Enter Mobile" width={theme.sWidth * 0.9} />
          ) : (
            <TextBox placeholder="Enter OTP" width={theme.sWidth * 0.9} />
          )}
        </FormGroup>
        {changePhoneOTP ? (
          <Button
            isAccent
            name="Send"
            width={theme.sWidth * 0.9}
            style={{marginTop: 10}}
            onPress={() => {
              isChangePhoneOTP(!changePhoneOTP);
            }}
          />
        ) : (
          <Button
            isAccent
            name="Verify"
            width={theme.sWidth * 0.9}
            style={{marginTop: 10}}
          />
        )}
      </View>
    );
  };
  const ForgotPassword = () => {
    return (
      <View>
        <FormTitle>Password Reset</FormTitle>
        <PasswordText>
          To reset your password, enter the email address you use to signin
        </PasswordText>
        <FormGroup>
          <TextBox placeholder="Enter Mobile" width={theme.sWidth * 0.9} />
        </FormGroup>
        <Button
          isAccent
          name="Sent Link to Email"
          width={theme.sWidth * 0.9}
          style={{marginTop: 10}}
        />
      </View>
    );
  };
  return (
    <Wrapper>
      <Inner height={page == 1 ? 70 : page == 2 ? 75 : 40}>
        <CloseBtn>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="close" size={24} color={theme.TEXT_COLOR} />
          </TouchableOpacity>
        </CloseBtn>
        {page == 1 && <LoginForm />}
        {page == 2 && <SignUp />}
        {page == 3 && <OtpLogin />}
        {page == 4 && <ForgotPassword />}
        {/*  */}
      </Inner>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;
const Inner = styled.View`
  height: ${p => p.height}%;
  width: 100%;
  background-color: ${p => p.theme.BACKGROUND};
  padding-horizontal: ${p => p.theme.sWidth * (24 * p.theme.PX_WIDTH)}px;
`;
const CloseBtn = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-vertical: ${p => p.theme.sWidth * (20 * p.theme.PX_WIDTH)}px;
`;
const FormTitle = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 32px;
  font-family: 'Poppins-Bold';
  margin-bottom: 10px;
`;
const FormGroup = styled.View`
  padding-vertical: 8px;
`;
const Forgot = styled.View`
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const ForgotText = styled.Text`
  color: ${p => p.theme.ACCENT};
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;
const TermsPolicy = styled.TouchableOpacity`
  margin-bottom: 10px;
`;
const TermsPolicyText = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 12px;
  font-family: 'Poppins-Regular';
`;
const TextBold = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 12px;
  font-family: 'Poppins-Bold';
  text-decoration-line: underline;
  text-decoration-color: ${p => p.theme.TEXT_COLOR};
`;
const TextOr = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 16px;
  font-family: 'Poppins-Medium';
  text-align: center;
  margin-vertical: 10px;
`;
const NewAccText = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 14px;
  font-family: 'Poppins-Medium';
  text-align: center;
`;
const ResendWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-vertical: 5px;
`;
const ResendText = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 12px;
  font-family: 'Poppins-Regular';
  text-align: center;
  margin-right: 15px;
`;
const BtnText = styled.Text`
  color: ${p => p.theme.ACCENT};
  font-size: 12px;
  font-family: 'Poppins-Bold';
  text-decoration-line: underline;
  text-decoration-color: ${p => p.theme.ACCENT};
  margin-right: 13px;
`;
const PasswordText = styled.Text`
  color: ${p => p.theme.TEXT_COLOR};
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

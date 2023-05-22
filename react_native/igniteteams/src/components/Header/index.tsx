import { Container, Logo, BackButton, BackIcon } from './styles';
import logo from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups');
  }

    return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
       }
      <Logo source={logo} />
    </Container>
  );
}

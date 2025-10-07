import FONTS from '@/constants/Fonts';
import { Image, StyleSheet, Text, View } from 'react-native';
// import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
// import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
// import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
// import { useFonts } from '@expo-google-fonts/inter/useFonts';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import Button from '@/components/Button';

export default function Index() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <Text style={styles.title}>BoraCasar</Text>
      <Text style={styles.text}>Seu casamento dos sonhos, perfeitamente planejado</Text>
      <Image style={styles.image} source={require('../assets/images/illustration-01.jpg')} />
      <Text style={styles.secondTitle}>Menos estresse, mais amor</Text>
      <Text style={styles.secondText}>Organização e romance andam juntos: controle o orçamento e viva o sonho do seu casamento.</Text>
      <Button />
      <Text style={styles.textLogin}>Já tem uma conta? Entre aqui.</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDF2F8'
  },

  title: {
    fontFamily: FONTS.font30.fontFamily,
    fontSize: FONTS.font30.fontSize,
    color: FONTS.font30.color,
    paddingTop: 24,
  },
  text: {
    fontFamily: FONTS.font16.fontFamily,
    fontSize: FONTS.font16.fontSize,
    color: FONTS.font16.color,
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 32,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 50,
    marginBottom: 32,
  },
  secondTitle: {
    fontFamily: FONTS.font24.fontFamily,
    fontSize: FONTS.font24.fontSize,
    color: FONTS.font24.color,
    textAlign: 'center',
    width: '80%',
  },
  secondText: {
    fontFamily: FONTS.font16.fontFamily,
    fontSize: FONTS.font16.fontSize,
    color: FONTS.font16.color,
    textAlign: 'center',
    width: '90%',
    lineHeight: 26,
    paddingTop: 18,
    paddingBottom: 30,
  },
  textLogin: {
    fontFamily: FONTS.font14.fontFamily,
    fontSize: FONTS.font14.fontSize,
    color: FONTS.font14.color,
    textAlign: 'center',
    }
})
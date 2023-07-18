import { lang } from 'models/lang';

const es: lang = {
  mainpage: {
    welcome: '¡Bienvenido',
    logout: 'Cerrar sesión',
  },
  error: {
    title500: 'Lo sentimos, hubo un error interno. No pudimos completar tu solicitud.',
    description500: 'Nuestro equipo ha sido informado del problema. Pedimos disculpas por las molestias.',
    title404: 'Lo sentimos, la página que buscas no se encuentra en la web.',
    title401: 'Lo sentimos, no estás autorizado para ver esta página.',
    title400: 'Lo sentimos, la respuesta fue una solicitud incorrecta.',
    description404: 'Esto puede ocurrir por dos razones:',
    description401: 'Esto puede ocurrir por dos razones:',
    description400: 'Esto puede ocurrir por dos razones:',
    reason1400: 'La solicitud tiene parámetros obligatorios faltantes, o',
    reason2400: 'Se produjo un comportamiento inesperado.',
    reason1401: 'Tu rol no está autorizado, o',
    reason2401: 'No estás en la vista correcta.',
    reason1404: 'Has ingresado una dirección de internet incorrecta, o',
    reason2404: 'La página ha sido eliminada o movida.',
    unknownStatus: 'El estado devuelto es desconocido y no ha sido manejado.',
    back: 'Volver a inicio',
  },
  maintenance: {
    welcome: '¡Bienvenido a Bark Parks!',
    welcomeBack: '¡Bienvenido de vuelta!',
    underMaintenance: '¡Nuestro sitio web está actualmente en mantenimiento!',
    supportedBy: 'Apoyado por:',
    copyright: '© para completar',
    doingBestBringStable: 'Estamos haciendo nuestro mejor esfuerzo para traer una nueva y más estable actualización.',
    send: '¡Gracias por tu paciencia!',
  },
  header: {
    home: 'Inicio',
    about: 'Acerca de',
    kennel: 'Caseta',
    pawPost: 'PawPost',
    profile: 'Perfil',
    shelters: 'Refugios',
    login: 'Login',
    logout: 'Logout',
    barkParks: 'BarkParks',
    friends: 'Amigos',
    groups: 'Grupos',
    settings: 'Configuración',
  },
  auth: {
    login: 'Login',
    email: 'Email',
    password: 'Contraseña',
    forgotPassword: '¿Olvidaste tu contraseña?',
    dontHaveAccount: '¿No tienes una cuenta?',
  },
};

export default es;

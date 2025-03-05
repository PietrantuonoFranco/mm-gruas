interface MediaAsset {
    publicId?: string; // ID público de la imagen en Cloudinary
    tag?: string;
}
  
interface DisplayProps {
    spacing?: number; // Espaciado entre elementos
}
  
interface Transformation {
    crop?: string; // Transformación de la imagen (ej: "fill")
}
  
interface LoaderProps {
    style?: string; // Estilo del loader (ej: "circle")
}
  
interface ThumbnailProps {
    mediaSymbolSize?: number; // Tamaño del símbolo de los medios
    mediaSymbolPosition?: string; // Posición del símbolo de los medios
    spacing?: number; // Espaciado entre miniaturas
    width?: number; // Ancho de las miniaturas
    height?: number; // Alto de las miniaturas
    navigationFloat?: boolean; // Si la navegación flota
    navigationShape?: string; // Forma de la navegación (ej: "none")
    navigationSize?: number; // Tamaño de la navegación
    selectedStyle?: string; // Estilo de la miniatura seleccionada (ej: "gradient")
    navigationColor?: string; // Color de la navegación
    navigationIconColor?: string; // Color del ícono de navegación
    navigation?: string; // Cuando aparecen los botones de navegación
}
  
interface NavigationButtonProps {
    shape?: string; // Forma del botón de navegación (ej: "none")
    iconColor?: string; // Color del ícono del botón
    color?: string; // Color del botón
    size?: number; // Tamaño del botón
    navigation?: string; // Cuando aparecen los botones de navegación
}
  
interface ThemeProps {
    primary?: string; // Color primario del tema
    active?: string; // Color activo del tema
}
  
interface ViewportBreakpoint {
    breakpoint: number; // Punto de quiebre para el responsive
    aspectRatio?: string; // Relación de aspecto para este breakpoint
    navigationButtonProps?: NavigationButtonProps; // Propiedades de los botones de navegación
    thumbnailProps?: ThumbnailProps; // Propiedades de las miniaturas
}
/*
viewportBreakpoints: [
              {
                breakpoint: 600,
                aspectRatio: '4:3',
                navigationButtonProps: {
                  size: 30,
                  navigation: "always"
                },
                thumbnailProps: {
                  navigation: "always",
                }
              }
            ],
*/
  
interface GalleryConfig {
    mediaAssets: MediaAsset[]; // Lista de recursos multimedia
    displayProps?: DisplayProps; // Propiedades de visualización
    transformation?: Transformation; // Transformaciones de las imágenes
    loaderProps?: LoaderProps; // Propiedades del loader
    aspectRatio?: string; // Relación de aspecto de la galería
    carouselLocation?: string; // Ubicación del carrusel (ej: "bottom")
    bgColor?: string; // Color de fondo
    thumbnailProps?: ThumbnailProps; // Propiedades de las miniaturas
    navigationButtonProps?: NavigationButtonProps; // Propiedades de los botones de navegación
    themeProps?: ThemeProps; // Propiedades del tema
    zoom?: boolean; // Si está habilitado el zoom
    viewportBreakpoints?: ViewportBreakpoint[]; // Puntos de quiebre responsive
    secureDistribution?: string; // Dominio seguro de Cloudinary
}

export default GalleryConfig;
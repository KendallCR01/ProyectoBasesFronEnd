export function obtenerImagenPorNombre(nombre) {
    let urlImagen;

    switch (nombre) {
        case 'Chris':
            urlImagen = '../assets/cbum.jpg';
            break;
        case 'Ronnie':
            urlImagen = '../assets/coleman.jpg';
            break;
        case 'Cristiano Ronaldo':
            urlImagen = 'http://example.com/cristiano_ronaldo.jpg';
            break;
        case 'Urs':
            urlImagen = 'http://example.com/urs.jpg';
            break;
        case 'Maquina Remo':
            urlImagen = '../assets/maquinaRemo.jpg';
            break;
        case 'Press Banca':
            urlImagen = '../assets/pressBanca.jpg';
            break;
        default:
            urlImagen = 'http://example.com/default_image.jpg'; // Imagen por defecto si no coincide con ningún caso
            break;
    }

    return urlImagen;
}
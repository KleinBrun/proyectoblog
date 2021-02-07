-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-02-2021 a las 22:10:20
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbblog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `idCategoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `idCategoria`) VALUES
(5, 'Comida'),
(6, 'Carnes Frias'),
(7, 'Frutas'),
(8, 'nada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contenido`
--

CREATE TABLE `contenido` (
  `id` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `desc1` varchar(50) NOT NULL,
  `desc2` varchar(50) NOT NULL,
  `img` varchar(50) NOT NULL,
  `fechacreacion` date NOT NULL DEFAULT current_timestamp(),
  `fechamod` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contenido`
--

INSERT INTO `contenido` (`id`, `categoria`, `titulo`, `slug`, `desc1`, `desc2`, `img`, `fechacreacion`, `fechamod`) VALUES
(28, 'Comida', 'Frijoles', 'https://www.shutterstock.com/image-photo/beans-bea', 'De Campo', 'fertilizados en el campo con abono natural y sin q', 'https://www.google.com/url?sa=i&url=https%3A%2F%2F', '2021-02-06', '2021-02-07'),
(29, 'Frutas', 'Manzana', 'https://es.wikipedia.org/wiki/Manzana', 'Sin injertos', 'Manza natural criada en las montañas de maria ', 'https://www.google.com/url?sa=i&url=https%3A%2F%2F', '2021-02-06', '2021-02-07'),
(30, 'Frutas', 'Banano', 'https://es.wikipedia.org/wiki/Banana', 'Grade', 'Direcatamanete de la productora mas grande de la g', 'https://www.google.com/url?sa=i&url=https%3A%2F%2F', '2021-02-06', '2021-02-07'),
(31, 'Carnes Frias', 'Salchichon', 'https://es.wikipedia.org/wiki/Salchich%C3%B3n', 'Carne de Cerdo', 'salchichon no sintetico fabricado solamente con ca', 'https://www.google.com/url?sa=i&url=https%3A%2F%2F', '2021-02-06', '2021-02-07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `telefono` int(11) NOT NULL,
  `tipouser` int(11) NOT NULL,
  `fechacreacion` date DEFAULT current_timestamp(),
  `fechamod` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `pass`, `telefono`, `tipouser`, `fechacreacion`, `fechamod`) VALUES
(8, 'klein', 'kl@', 'Z2lp', 78, 2, NULL, '2021-02-07'),
(21, 'luis4', 'ls@', 'Y2Vl', 6, 2, NULL, '2021-02-07'),
(30, 'admin', 'admin', 'YA==', 5, 1, '2021-02-07', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contenido`
--
ALTER TABLE `contenido`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `contenido`
--
ALTER TABLE `contenido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

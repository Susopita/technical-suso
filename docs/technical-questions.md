# Preguntas Técnicas

## 📋 Preguntas Técnicas Fundamentales

### React Fundamentals

### 1. ¿Cuál es la diferencia entre `useState` y `useEffect`? Proporciona un ejemplo de cada uno

Ambos hooks se usan para manejar estados, pero `useState` maneja estados simples como variables que cambian dentro del componente, mientras que `useEffect` tiene distintas formas de uso y se ve afectada por los estados del componente. Según la definicion del useEffect, este pueden solo inicializar estados en el primer renderizado o pueden hacer cosas mas complejas de acuerdo a cambio en ciertos estados o en cada cambio.

Un ejemplo simple sería un contador:

```jsx
import { useState, useEffect } from 'react';

function Contador() {
  // 1. useState: Define una variable de estado 'contador'
  // y una función para actualizarla 'setContador'.
  const [contador, setContador] = useState(0);

  // 2. useEffect: Se ejecuta después de que el componente se renderiza.
  useEffect(() => {
    // 3. Este 'efecto secundario' actualiza el título del documento.
    // Es una acción que no está directamente relacionada con el renderizado de la UI.
    document.title = `Has hecho clic ${contador} veces`;
    
    // 4. El arreglo de dependencias [contador] le dice a React
    // que solo ejecute este efecto cuando el valor de 'contador' cambie.
    // Esto evita que se ejecute en cada renderizado.
  }, [contador]);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Haz clic
      </button>
    </div>
  );
}
```

### 2. ¿Qué hace React.memo() y cuándo lo usarías?

Me recuerda al hooks useMemo, que optimiza el recalculo de operaciones posiblemente costosas al memorizar el resultado de este y retornar el mismo resultado ya calculado sin volver a renderizarlo todo. Investigando encontre que es lo mismo que useMemo, pero a un orden superior, a diferencia de useMemo que evitar recalcular un valor, React.memo() evita recalcular un componente entero meidante sus props (useMemo lo hace con una lista de dependencias (estados)).

### 3. ¿Cómo pasarías datos entre componentes padre e hijo en React?

Conozco un par de formas, la primera es usando el metodo clasico de `props` para pasar datos de padra a hijo. Segundo, es usando callbacks, para pasar funciones que permitan modificar datos en el componente padre desde el hijo. El tercero, seria usando hooks mas complejos como useRef, useForwardRef y useImperativeHandle para una comunicación bi-direccional entre componentes (aunque aun me falta evaluar cual seria el performance de estos hooks y comunicacion). Y el ultimo, obviamente, usar contexto global.

### 4. ¿Cuál es la diferencia entre un componente controlado y no controlado?

Difieren en los procesos que ocurren por debajo y rendimiento, es decir, de forma simple, un componente controlado es uno que react siempre esta mapeando y revisando su estado al cambiar, si tu lo cambias en un formulario por ejemplo, que sea controlado te permite validarlo antes de mostrarlo en el DOM y cambiar ese comportamiento, en cambio, un componente no controlado no hace literalmente nada, lo que lo hace mas simple y rápido en cierto sentido al no aplicar mayor logica extra, pero tambien tiene sus caracteristicas como escalabilidad y mantenibilidad (algo controlado obviamente es mas escalable y mantenible, al menos usando react).

### 5. ¿Qué son las keys en React y por qué son importantes?

Son muy importantes para poder diferenciar entre componentes de una lista y evaluar cual cambio para solo renderizar ese, lo cual es optimo, sino fuese asi pues se tendria que reevaluar toda la lista, lo cual no es muy eficiente.

### 6. Explica qué hace `useCallback` con un ejemplo práctico

Permite optimizar la renderización de componentes memoizados al evitar que se deban de re-renderizar forzadamente al cambiar la referencia de sus props. Yo lo entendi, con un ejemplo simple:

```jsx
// Componente Hijo optimizado
const BotonHijo = React.memo(({ onClick }) => {
  console.log("Renderizando BotonHijo...");
  return <button onClick={onClick}>Clickeame</button>;
});

// Componente Padre
function Padre() {
  const [contador, setContador] = useState(0);

  const handleClick = () => { // Esta función se recrea en cada render
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <BotonHijo onClick={handleClick} />
    </div>
  );
}
```

Aqui por ejemplo, cada vez que se hace click, el estadod el contador cambia, por lo que el componente padre se re-renderiza, pero el componente hijo no deberia, sin embargo, si cambia ya que `handleClick` se vuelve a crear y obtiene una referencia nueva a la que tiene `onClick` memoizado, eso lleva a que el componente hijo se vea forzado a renderizar para tener otra referencia de `onClick` valida.

Usando `useCallback` podemos evitar esto:

```jsx
const handleClick = useCallback(() => {
setContador(contador + 1);
}, [contador]);
```

En este caso, el componente hijo no se re-renderiza porque el `onClick` sigue manteniendo una referencia valida ya que se memoiza la funcion tambien. Solo cambia si alguna dependencia cambia.

Entonces, entendi que `useCallback` es muuy buena forma de optimizar el rendmineto de componentes en sinergia con `React.memo` u algun otro hook de memoización (que no tengo muy claro todos los hooks pero creo que es suficiente).

---

## 📋 Next.js Específico

### 7. ¿Cuál es la diferencia principal entre Server Components y Client Components?

Principalmente, en quien hace la renderización, en Server Components, el servidor se encarga de renderizar y procesar todos las pagina y componentes para entregar solo el HTML resultante al cliente, mientras que en Client Components, el cliente se encarga de renderizar y procesar los componentes para mostrar el resultado en el navegador.

### 8. ¿Cómo crear una ruta dinámica `/product/[id]` en App Router?

Según la documentación de Next.js, se puede crear rutas dinámicas unicamente definiendolas en el nombre del archivo con cierta sintaxis. Tal que:

| Ruta | Ejemplo URL | params |
| --- | --- | --- |
| `/product/[id].js` | `/product/1` | `{ id: 1 }` |
| `/product/[id].js` | `/product/2` | `{ id: 2 }` |
| `/product/[id].js` | `/product/3` | `{ id: 3 }` |

Y luego se puede utilizar en el componente de la ruta:

```jsx
import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}
```

Next.js tambien permite capturar mas segmentos de la ruta, tanto de forma opcional como obligatoria, usando sintaxis similar como:

| Ruta dinamica | Sintaxis | Ejemple URL | params |
| --- | --- | --- | --- |
| Simple | `/product/[slug].js` | `/product/1` | `{ slug : 1 }` |
| Multiple | `/product/[...slug].js` | `/product/1/2` | `{ slug : [1, 2] }` |
| Optional | `/product/[[...slug]].js` | `/product/` | `{ slug : undefined }` |

### 9. ¿Qué son los archivos `loading.tsx` y `error.tsx` en App Router?

Son archivos que se renderizan de forma inmediata al suceder ciertos eventos, en le caso de `loading.tsx` se renderiza cuando el componente se carga, y `error.tsx` cuando ocurre un error en la carga del componente. En ambos casos se encarga de mostrar y tratar su evento con una UI adecuada al usuario ponele.

### 10. ¿Cómo hacer fetch de datos en un Server Component?

Existen dos formas, una usando `getServerSideProps` y otra usando `getStaticProps`. La primera funciona perfecto para cuando se necesitan datos dinámicos (reevalua en cada solicitud) y la segunda para cuando se necesitan datos estáticos que se pueden obtener en tiempo de compilación. Sin embargo, la renderizacion estatica no se queda atras y puede ser recompilada con funciones como `revalidate()` si se necesitan datso nuevos y se programa correctamente.

### 11. ¿Cuándo y por qué usarías "use client" en un componente?

Cuando se necesita un comportamiento muy dinamico en el cliente y darle el trabajo al servidor lo sobrecargaria. Por ejemplo tal vez un componente tiene alguna funcionalidad compleja o costosa en renderizacion (animaciones, etc) entoces se manda ese trabajo al cliente para que ejecute en el navegador sin tanto problema. Y lo usari en caso de un componente con un gran rendimiento y que no se pueda hacer en el servidor (ya que existen ciertos casos que se requiere la participacion del cliente y sus datos para que funcione).

### 12. ¿Cómo desplegar una aplicación Next.js en Vercel?

Es tan facil como amplify de aws XD, solo debes tener un repositorio en github y selecionarlo para que vercel lo deployee y ya solo faltaria tocar algunas cosas que tu proyecto requiera como variables de entorno, comandos de compilacion extra, etc.

---

## 📋 TypeScript & Best Practices

### 13. ¿Cómo definirías tipos para las props de un componente React?

Usando interfaces, asi puedo definir todo tipo de objetos dentro de ellos tanto complejos como primitivos. Eso para definir las props como tal, pero si hace referencia a los tipos dentro, esto se pueden definir usando tipos nativos y muchas veces es suficiente.

### 14. ¿Cuál es la diferencia entre `interface` y `type` en TypeScript?

`interface` es utilizado para definir interfaces de tipos concretos, es como si definieras la forma del objeto que se va usar, al igual que un API que define un contrato o comportamiento que se espera. En cambio, `type` es que nada un alias para tipos, sirve para definir tipos un poco mas complejos pero no tiene las capacidades de `interface`, es algo más "superficial" por asi decirlo.

### 15. ¿Qué estrategias usarías para hacer tu aplicación responsive con Tailwind?

En Tailwdind, existen varias formas de hacer responsive, pero la que se suele impartir e implementar es el diseño `mobile-first` y puede ser confuso (por primera vez para mi, lo fue) pero no es tan complicado, solo es diseñar como quieras que se vea en mobile sin ningun prefijo y cuando subas para pantallas mas grandes uses esoos prefijos como `md:` o `lg:` para definir el breakpoint y modificar el comportamiento de los componentes.

### 16. ¿Cómo manejarías errores de API en una aplicación Next.js?

Depende de la implementación, por ejemplo, en renderizacion en el servidor se puede usar `try catch` y manejar el error directamente en el componenente, pero la renderización en el cliente se puede manejar con `SWR`(libreria de react de parte de netx.js gaaa) que tiene un hook para manejar errores de API.

### 17. ¿Qué es el prop drilling y cómo lo evitarías?

Es cuando necesitas pasar datos de un componenete padre a varios componenetes hijos y se vuelve ciertamente caotico. Es por eso que una forma de solucionarlo es usando un contexto global, la solucion que provee react, que acarree todos esos atributos en un solo lugar facilemente accesible por todos los componentes.

### 18. Menciona 3 buenas prácticas para optimizar el rendimiento en React

1. Memoización de Componentes (Evitar re-renders innecesarios)
2. Virtualización de Listas (Manejar grandes conjuntos de datos)
3. Gestión del Estado Eficiente (Agrupación de llamadas `setState`)

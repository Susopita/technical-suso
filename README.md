# Evaluación Frontend - Next.js & React

## 🎯 Objetivo

Evaluar las habilidades técnicas y teóricas de desarrollo frontend utilizando tecnologías modernas.

## 🛠️ Stack Tecnológico Requerido

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** (recomendado)
- **shadcn/ui** (recomendado)
- **Despliegue en Vercel**

---

## 📋 Caso Práctico: Dashboard de Películas

### Descripción del Proyecto

Desarrollar una aplicación web que permita explorar películas utilizando la API pública de **The Movie Database (TMDB)**. La aplicación debe incluir funcionalidades de búsqueda, filtrado y visualización detallada de películas.

### 🔗 API a Utilizar

- **TMDB API**: <https://developers.themoviedb.org/3>
- Necesitarás registrarte para obtener una API key gratuita
- Documentación: <https://developers.themoviedb.org/3/getting-started/introduction>

### ✅ Funcionalidades Requeridas

#### Páginas Obligatorias

1. **Página Principal** (`/`)
   - Lista de películas populares
   - Barra de búsqueda
   - Filtros por género
   - Paginación

2. **Detalle de Película** (`/movie/[id]`)
   - Información completa de la película
   - Reparto principal
   - Tráiler (si está disponible)
   - Películas similares

3. **Búsqueda** (`/search`)
   - Resultados de búsqueda
   - Filtros avanzados
   - Estado de carga y errores

#### Funcionalidades Técnicas

- **Rutas Dinámicas**: Implementar `/movie/[id]` para mostrar detalles
- **Server Components**: Utilizar cuando sea apropiado
- **Client Components**: Para interactividad (búsqueda, filtros)
- **Loading States**: Implementar skeletons o spinners
- **Error Handling**: Manejo de errores de API y estados 404
- **Responsive Design**: Funcional en móvil y desktop
- **SEO**: Metadatos dinámicos para cada película

### 🎨 Requerimientos de UI/UX

- Diseño limpio y moderno
- Uso de shadcn/ui para componentes (recomendado)
- Implementar modo oscuro/claro (opcional)
- Transiciones suaves entre páginas
- Estados de carga atractivos

### 🚀 Extras (Opcionales)

- Implementar favoritos (usando localStorage)
- Filtros avanzados (año, rating, duración)
- Infinite scroll en lugar de paginación
- Compartir película en redes sociales
- PWA capabilities

### 📦 Entregables

1. **Código fuente** en repositorio GitHub
2. **Aplicación desplegada** en Vercel
3. **README** con:
   - Instrucciones de instalación
   - Descripción de decisiones técnicas
   - Screenshots de la aplicación
   - URL de la aplicación en vivo

### ⏱️ Tiempo Límite

**12 horas máximo**

- Setup inicial y estructura: 2 horas
- Página principal: 4 horas
- Página de detalle: 3 horas
- Styling y responsive: 2 horas
- Despliegue: 1 hora

### 🎯 Enfoque de Desarrollo Recomendado

1. **Horas 1-2**: Setup del proyecto, configuración básica, estructura de carpetas
2. **Horas 3-6**: Página principal con grid de películas y búsqueda básica
3. **Horas 7-9**: Página de detalle con ruta dinámica
4. **Horas 10-11**: Responsive design y polish básico
5. **Hora 12**: Despliegue en Vercel y documentación

### 🔍 Criterios de Evaluación

- **Funcionalidad core completada** (30%)
- **Implementación correcta de Next.js App Router** (25%)
- **Uso de TypeScript** (20%)
- **Despliegue exitoso** (15%)
- **Código limpio y organizado** (10%)

---

### 📝 Preguntas Técnicas Fundamentales

### React Fundamentals (6 preguntas)

**1. ¿Cuál es la diferencia entre `useState` y `useEffect`? Proporciona un ejemplo de cada uno.**

**2. ¿Qué hace React.memo() y cuándo lo usarías?**

**3. ¿Cómo pasarías datos entre componentes padre e hijo en React?**

**4. ¿Cuál es la diferencia entre un componente controlado y no controlado?**

**5. ¿Qué son las keys en React y por qué son importantes?**

**6. Explica qué hace `useCallback` con un ejemplo práctico.**

### Next.js Específico (6 preguntas)

**7. ¿Cuál es la diferencia principal entre Server Components y Client Components?**

**8. ¿Cómo crear una ruta dinámica `/product/[id]` en App Router?**

**9. ¿Qué son los archivos `loading.tsx` y `error.tsx` en App Router?**

**10. ¿Cómo hacer fetch de datos en un Server Component?**

**11. ¿Cuándo y por qué usarías "use client" en un componente?**

**12. ¿Cómo desplegar una aplicación Next.js en Vercel?**

### TypeScript & Best Practices (6 preguntas)

**13. ¿Cómo definirías tipos para las props de un componente React?**

**14. ¿Cuál es la diferencia entre `interface` y `type` en TypeScript?**

**15. ¿Qué estrategias usarías para hacer tu aplicación responsive con Tailwind?**

**16. ¿Cómo manejarías errores de API en una aplicación Next.js?**

**17. ¿Qué es el prop drilling y cómo lo evitarías?**

**18. Menciona 3 buenas prácticas para optimizar el rendimiento en React.**

---

## 🎯 Rúbrica de Evaluación

### Proyecto Práctico (70%)

| Criterio | Excelente (4) | Bueno (3) | Regular (2) | Deficiente (1) |
|----------|---------------|-----------|-------------|----------------|
| **Arquitectura** | Código bien organizado, patrones claros, separación de responsabilidades | Estructura clara con pequeñas mejoras posibles | Organización básica pero funcional | Código desorganizado, difícil de seguir |
| **Next.js Implementation** | Uso avanzado de App Router, Server/Client Components apropiados | Implementación correcta de funcionalidades principales | Uso básico pero correcto de Next.js | Implementación incorrecta o incomplete |
| **TypeScript** | Tipado estricto, tipos custom, manejo de errores | Tipado correcto en la mayoría de casos | Tipado básico pero funcional | Muchos `any` o errores de tipos |
| **UI/UX** | Diseño pulido, responsive, excelente UX | Diseño atractivo y funcional | Diseño básico pero usable | Diseño pobre o no responsive |

### Preguntas Teóricas (30%)

- **Conceptos Fundamentales**: 40% del peso
- **Patrones y Arquitectura**: 35% del peso  
- **Optimización y Performance**: 25% del peso

---

## 📋 Checklist de Entrega

### Antes de la Evaluación

- [ ] Enviar el caso práctico con al menos 5 días de anticipación
- [ ] Proporcionar API key de TMDB o instrucciones para obtenerla
- [ ] Clarificar tiempo límite y criterios de evaluación

### Durante la Revisión

- [ ] Verificar funcionamiento en producción
- [ ] Revisar código en GitHub
- [ ] Evaluar arquitectura y patrones utilizados
- [ ] Comprobar implementación de TypeScript
- [ ] Analizar decisiones técnicas en el README

### Entrevista Técnica

- [ ] Preguntas sobre decisiones tomadas en el proyecto
- [ ] Conceptos teóricos fundamentales
- [ ] Discusión sobre optimizaciones posibles
- [ ] Escalabilidad y mantenimiento del código

---

## 💡 Consejos para Candidatos

### Para el Proyecto

- Inicia con un MVP funcional y luego agrega features
- Documenta tus decisiones técnicas en el README
- Implementa manejo de errores desde el principio
- Enfócate en la experiencia del usuario
- No olvides hacer commits frecuentes con mensajes claros

### Para las Preguntas

- Proporciona ejemplos de código cuando sea posible
- Explica no solo el "qué" sino también el "por qué"
- Si no sabes algo, sé honesto y explica cómo lo investigarías
- Relaciona conceptos teóricos con ejemplos prácticos

---

## 🔗 Recursos Útiles

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [TMDB API Documentation](https://developers.themoviedb.org/3)

---

**Tiempo estimado total de evaluación: 12 horas**

- Proyecto práctico: 12 horas máximo

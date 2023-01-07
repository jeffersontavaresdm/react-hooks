import React from "react";

interface ThemeContextProviderProps {
  children: JSX.Element
}

export interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

/**
 * Primeiro cria-se um context com a função do React createContext.
 * Neste caso criei um tipo para o contexto e o chamei de ThemeProps.
 * Deve se passar um valor padrão para o context,
 * dentro dos parenteses da função passei o objeto padrão com um theme light e uma função que não faz nada,
 * como a função toggleTheme da interface ThemeProps não retorna nada, não foi preciso fazer nada dentro das chaves.
 */
export const ThemeContext = React.createContext<ThemeProps>({ theme: "light", toggleTheme: () => {} })

/**
 * Neste ponto foi criado uma constante chamada "ThemeContextProvider" que é um componente React.
 * O componente é uma função que retorna um elemento do React e aceita um objeto de propriedades como argumento.
 *
 * React.FunctionComponent<ThemeContextProviderProps> tipa o objeto das propriedades que a função aceita receber,
 * no caso "ThemeContextProviderProps".
 *
 * Resumo:
 * O componente é uma função que retorna um elemento do React e aceita um objeto de propriedades do tipo
 * "ThemeContextProviderProps" como argumento.
 */
export const ThemeContextProvider: React.FunctionComponent<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<string>("light")

  const toggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider >
  )
}
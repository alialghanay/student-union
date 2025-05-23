"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import { useRouter } from "next/navigation";
import store from "@/lib/store";

function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextThemesProvider>
      <Provider store={store}>{children}</Provider>
    </NextThemesProvider>
  );
}

export default Providers;

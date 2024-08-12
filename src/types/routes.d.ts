export type Routes = {
  index: undefined;  
  details: undefined; // A rota "details" espera um parâmetro "id"
  // details: { id: string }; // A rota "details" espera um parâmetro "id"
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes {}
  }
}
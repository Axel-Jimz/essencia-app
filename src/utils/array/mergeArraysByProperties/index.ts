import { DocumentData } from "firebase/firestore";

export const mergeArraysByProperties = (
  primaryArray: Array<DocumentData>,
  secondaryArray: Array<DocumentData>,
  primaryArrayProperty: string,
  secondaryArrayProperty: string
): Array<Record<string, any>> => {
  const mergedArray = [];

  for (const primaryItem of primaryArray) {
    // Buscar objetos coincidentes en el segundo array
    const matchingItems = secondaryArray.filter(
      (secondaryItem: Record<string, any>) =>
        secondaryItem[secondaryArrayProperty] === primaryItem[primaryArrayProperty]
    );

    if (matchingItems.length > 0) {
      // Fusionar objetos coincidentes y agregar al array fusionado
      for (const secondaryItem of matchingItems) {
        const mergedItem = { ...primaryItem, ...secondaryItem };
        mergedArray.push(mergedItem);
      }
    } else {
      // Si no hay coincidencias, agregar el objeto del primer array sin fusionar
      mergedArray.push(primaryItem);
    }
  }

  return mergedArray;
};

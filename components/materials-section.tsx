import { Materials } from './materials';
import { allMaterials, materialsByCategory } from '@/lib/data-generated';

export async function MaterialsSection() {
  const categories = Object.keys(materialsByCategory);
  return (
    <Materials
      initialMaterials={allMaterials}
      initialCategories={categories}
    />
  );
}

import React from 'react';
import { IExpert } from '../../../old/lib/types';

export interface IExpertProfileViewProps {
  expert: IExpert;
}

export const MaterialsView: React.FC<IExpertProfileViewProps> = ({
  expert,
}) => {
  return (
    <>
      <div>DraftMaterials</div>
      <div>PublishedMaterials</div>
    </>
  );
};

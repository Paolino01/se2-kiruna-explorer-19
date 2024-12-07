import { ICoordinate } from '@interfaces/coordinate.interface';
import { DocTypeEnum } from '@utils/enums/doc-type.enum';
import { StakeholderEnum } from '@utils/enums/stakeholder.enum';
import { LinkTypeEnum } from '@utils/enums/link-type.enum';
import { ScaleTypeEnum } from '@utils/enums/scale-type-enum';
import { IConnection } from './document.interface';
import { ObjectId } from 'mongoose';
import { IReturnMedia } from './media.return.interface';

export interface IDocumentResponse {
  id: string;
  title: string;
  stakeholders?: StakeholderEnum[];
  scale?: ScaleTypeEnum;
  architecturalScale?: string;  //Added due to changing in scale
  type: DocTypeEnum;
  date: string;
  summary: string;
  connections?: IConnection[];
  language?: string;
  media?: IReturnMedia[] | null;
  coordinates?: ICoordinate | null;
}

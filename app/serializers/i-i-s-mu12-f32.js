import { Serializer as f32Serializer } from
  '../mixins/regenerated/serializers/i-i-s-mu12-f32';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(f32Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

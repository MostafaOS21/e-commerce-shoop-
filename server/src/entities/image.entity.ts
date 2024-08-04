import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class Image {
  @Prop({ required: true })
  url: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

const ImageSchema = SchemaFactory.createForClass(Image);

export { Image, ImageSchema };
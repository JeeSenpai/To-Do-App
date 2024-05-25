import { ApiProperty } from "@nestjs/swagger";

export class CreateToDoDto {
    @ApiProperty()
    todo: string
}

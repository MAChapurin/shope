export enum INPUT_NAMES {
  NAME = 'name',
  EMAIL = 'email',
  REVIEW = 'review'
}

export enum VALIDATION_SETTING {
  LABEL_ALERT = 'Ваш email не будет опубликован. Обязательные поля помечены *',
  MAX_NAME_LENGTH = 16,
  MAX_NAME_LENGTH_MESSAGE = `Максимальная длинна должна быть ${VALIDATION_SETTING.MAX_NAME_LENGTH}`,
  MIN_NAME_LENGTH = 2,
  MIN_NAME_LENGTH__MESSAGE = 'Имя слишком короткое',
  MIN_EMAIL_LENGTH = 4,
  MIN_EMAIL_LENGTH_MESSAGE = 'Email слишком короткий',
  MAX_EMAIL_LENGTH = 40,
  MAX_REVIEW_LENGTH = 400,
  MAX_REVIEW_LENGTH_MESSAGE = `Максимальная длинна должна быть ${VALIDATION_SETTING.MAX_REVIEW_LENGTH}`,
  MIN_REVIEW_LENGTH = 1,
  MIN_REVIEW_LENGTH_MESSAGE = 'Отзыв слишком короткий',
  EMAIL_NO_VALID_MESSAGE = 'Email введен неккоректно',
  RATING_NO_VALID_MESSAGE = 'Рейтинг обязателен для заполнения'
}

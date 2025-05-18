export enum INPUT_NAMES {
	NAME = 'name',
	EMAIL = 'email',
	REVIEW = 'review',
	PASSWORD = 'password',
	ADDRESS = 'address',
	PHONE = 'tel'
}

export enum INPUT_PLACEHOLDERS {
	NAME = 'Имя*',
	EMAIL = 'Email*',
	REVIEW = 'Отзыв*',
	PASSWORD = 'Пароль*',
	ADDRESS = 'Адрес*',
	PHONE = 'Телефон*'
}

export const VALIDATION_SETTING = {
	SUCCESS_MESSAGE_ORDER: 'Заказ успешно оплачен.',
	SUCCESS_MESSAGE_REVIEW: 'Отзыв успешно отправлен.',
	LABEL_ALERT: 'Ваш email не будет опубликован. Обязательные поля помечены *',
	MAX_NAME_LENGTH: 16,
	MAX_NAME_LENGTH_MESSAGE: `Максимальная длинна должна быть 16`,
	MIN_NAME_LENGTH: 2,
	MIN_NAME_LENGTH__MESSAGE: 'Имя слишком короткое',
	MIN_PASSWORD_LENGTH: 4,
	MIN_PASSWORD_LENGTH__MESSAGE: 'Пароль слишком короткий',
	SPACE_PASSWORD_MESSAGE: 'Пароль не должен содержать пробелы',
	MAX_PASSWORD_LENGTH: 50,
	MAX_PASSWORD_LENGTH__MESSAGE: 'Максимальная длинна должна быть 50',
	MIN_EMAIL_LENGTH: 4,
	MIN_EMAIL_LENGTH_MESSAGE: 'Email слишком короткий',
	MAX_EMAIL_LENGTH: 40,
	MAX_REVIEW_LENGTH: 400,
	MAX_REVIEW_LENGTH_MESSAGE: `Максимальная длинна должна быть 400`,
	MIN_REVIEW_LENGTH: 1,
	MIN_ADDRESS_LENGTH: 3,
	MAX_ADDRESS_LENGTH: 300,
	MIN_REVIEW_LENGTH_MESSAGE: 'Отзыв слишком короткий',
	EMAIL_NO_VALID_MESSAGE: 'Email введен неккоректно',
	RATING_NO_VALID_MESSAGE: 'Рейтинг обязателен для заполнения',
	MIN_ADDRESS_LENGTH_MESSAGE: 'Адрес слишком короткий',
	MAX_ADDRESS_LENGTH_MESSAGE: 'Адрес слишком длинный'
}

import { required, maxLength, minLength } from 'vuelidate/lib/validators';

export const communityTitleMaxLength = 64;
export const communityTitleMinLength = 1;

export const communityTitleValidators = {
    required,
    maxLength: maxLength(communityTitleMaxLength),
    minLength: minLength(communityTitleMinLength)
};

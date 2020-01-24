import { inject, injectable } from '~/node_modules/inversify';
import { IThemeService } from '~/services/theme-service/IThemeService';
import { action, observable } from '~/node_modules/mobx';
import { ITheme } from '~/models/common/theme/ITheme';
import themeFactory from '~/models/common/theme/factory';
import { TYPES } from '~/services/inversify-types';
import { IStorageService } from '~/services/storage/IStorage';
import { IOkStorage } from '~/services/storage/lib/okuna-storage/IOkStorage';
import jss from 'jss';
import preset from 'jss-preset-default';
import { IOkLogger } from '~/services/logging/types';
import { ILoggingService } from '~/services/logging/ILogging';

const createGenerateId = () => {
    return (rule: any, sheet: any) => `${rule.key}`;
};

jss.setup(Object.assign(preset(), {createGenerateId}));

@injectable()
export class ThemeService implements IThemeService {

    static ACTIVE_THEME_STORAGE_KEY = 'activeThemeId';

    static themeStylesheet = {
        'ok-has-background-primary': {
            'background-color': (data: ITheme) => {
                return [data.primaryColor.hex(), '!important'];
            }
        },
        'ok-has-background-primary-80': {
            'background-color': (data: ITheme) => {
                return [data.primaryColor80.hex(), '!important'];
            }
        },
        'ok-has-background-primary-60': {
            'background-color': (data: ITheme) => {
                return [data.primaryColor60.hex(), '!important'];
            }
        },
        'ok-has-background-primary-invert': {
            'background-color': (data: ITheme) => {
                return [data.primaryInvertColor.hex(), '!important'];
            }
        },
        'ok-has-background-primary-invert-80': {
            'background-color': (data: ITheme) => {
                return [data.primaryInvertColor80.hex(), '!important'];
            }
        },
        'ok-has-background-primary-invert-60': {
            'background-color': (data: ITheme) => {
                return [data.primaryInvertColor60.hex(), '!important'];
            }
        },
        'ok-has-background-primary-highlight': {
            'background-color': (data: ITheme) => {
                return [data.primaryHighlightColor.hex(), '!important'];
            }
        },
        'ok-has-background-accent': {
            'background-color': (data: ITheme) => {
                return [data.accentColor.hex(), '!important'];
            }
        },
        'ok-has-background-accent-gradient': {
            'background-image': (data: ITheme) => {
                return [`linear-gradient(315deg, ${data.accentGradient[0].hex()} 0%, ${data.accentGradient[1].hex()} 74%)`, '!important'];
            },
            'background-color': (data: ITheme) => {
                return [data.accentGradient[0].hex(), '!important'];
            },
        },
        'ok-has-background-success': {
            'background-color': (data: ITheme) => {
                return [data.successColor.hex(), '!important'];
            }
        },
        'ok-has-background-success-invert': {
            'background-color': (data: ITheme) => {
                return [data.successColorInvert.hex(), '!important'];
            }
        },
        'ok-has-background-error': {
            'background-color': (data: ITheme) => {
                return [data.errorColor.hex(), '!important'];
            }
        },
        'ok-has-background-error-invert': {
            'background-color': (data: ITheme) => {
                return [data.errorColorInvert.hex(), '!important'];
            }
        },
        'ok-has-background-warning': {
            'background-color': (data: ITheme) => {
                return [data.warningColor.hex(), '!important'];
            }
        },
        'ok-has-background-warning-invert': {
            'background-color': (data: ITheme) => {
                return [data.warningColorInvert.hex(), '!important'];
            }
        },
        'ok-has-background-info': {
            'background-color': (data: ITheme) => {
                return [data.infoColor.hex(), '!important'];
            }
        },
        'ok-has-background-info-invert': {
            'background-color': (data: ITheme) => {
                return [data.infoColorInvert.hex(), '!important'];
            }
        },
        'ok-has-text-primary': {
            'color': (data: ITheme) => {
                return [data.primaryColor.hex(), '!important'];
            }
        },
        'ok-has-text-primary-80': {
            'color': (data: ITheme) => {
                return [data.primaryColor80.hex(), '!important'];
            }
        },
        'ok-has-text-primary-60': {
            'color': (data: ITheme) => {
                return [data.primaryColor60.hex(), '!important'];
            }
        },
        'ok-has-text-primary-invert': {
            'color': (data: ITheme) => {
                return [data.primaryInvertColor.hex(), '!important'];
            }
        },
        'ok-has-text-primary-invert-80': {
            'color': (data: ITheme) => {
                return [data.primaryInvertColor80.hex(), '!important'];
            }
        },
        'ok-has-text-primary-invert-60': {
            'color': (data: ITheme) => {
                return [data.primaryInvertColor60.hex(), '!important'];
            }
        },
        'ok-has-text-accent': {
            'color': (data: ITheme) => {
                return [data.accentColor.hex(), '!important'];
            }
        },
        'ok-has-text-error': {
            'color': (data: ITheme) => {
                return [data.errorColor.hex(), '!important'];
            }
        },
        'ok-has-text-error-invert': {
            'color': (data: ITheme) => {
                return [data.errorColorInvert.hex(), '!important'];
            }
        },
        'ok-has-text-warning': {
            'color': (data: ITheme) => {
                return [data.warningColor.hex(), '!important'];
            }
        },
        'ok-has-text-warning-invert': {
            'color': (data: ITheme) => {
                return [data.warningColorInvert.hex(), '!important'];
            }
        },
        'ok-has-text-info': {
            'color': (data: ITheme) => {
                return [data.infoColor.hex(), '!important'];
            }
        },
        'ok-has-text-info-invert': {
            'color': (data: ITheme) => {
                return [data.infoColorInvert.hex(), '!important'];
            }
        },
        'ok-has-border-top-primary-highlight': {
            'borderTop': (data: ITheme) => {
                return [`solid 1px ${data.primaryHighlightColor.hex()}`, '!important'];
            }
        },
        'ok-has-border-bottom-primary-highlight': {
            'borderBottom': (data: ITheme) => {
                return [`solid 1px ${data.primaryHighlightColor.hex()}`, '!important'];
            }
        },
        //Global
        'ok-input': {
            'background-color': (data: ITheme) => {
                return [data.primaryHighlightColor.hex(), '!important'];
            },
            'color': (data: ITheme) => {
                return [data.primaryInvertColor.hex(), '!important'];
            },
            '&::placeholder': {
                'color': (data: ITheme) => {
                    return [data.primaryInvertColor60.hex(), '!important'];
                },
            }
        },
        // Bulma overrides
        'card-header': {
            'boxShadow': (data: ITheme) => {
                return [`0 1px 2px ${data.primaryInvertColor.hex()}`, '!important'];
            }
        },
        'card-footer': {
            'borderTop': (data: ITheme) => {
                return [`1px solid ${data.primaryHighlightColor.hex()}`, '!important'];
            }
        }
    };

    static themes = [
        themeFactory.make({
            id: 1,
            name: 'White Gold',
            primary_color: '#ffffff',
            primary_invert_color: '#000000',
            accent_color: '#e9a039',
            accent_gradient: '#e9a039,#f0c569',
            success_color: '#7ED321',
            success_color_invert: '#ffffff',
            error_color: '#FF3860',
            error_color_invert: '#ffffff',
            warning_color: '#ffaf34',
            warning_color_invert: '#ffffff',
            info_color: '#227cff',
            info_color_invert: '#ffffff',
        }),
        themeFactory.make({
            id: 2,
            name: 'Dark Gold',
            primary_color: '#060606',
            primary_invert_color: '#ffffff',
            accent_color: '#e9a039',
            accent_gradient: '#e9a039,#f0c569',
            success_color: '#7ED321',
            success_color_invert: '#ffffff',
            error_color: '#FF3860',
            error_color_invert: '#ffffff',
            warning_color: '#ffaf34',
            warning_color_invert: '#ffffff',
            info_color: '#227cff',
            info_color_invert: '#ffffff',
        }),
    ];

    @observable activeTheme: ITheme | undefined;

    private activeThemeStorage: IOkStorage<number>;
    private logger: IOkLogger;

    private themeStylesheet?: any;

    constructor(@inject(TYPES.StorageService)  storageService?: IStorageService,
                @inject(TYPES.LoggingService)  loggingService?: ILoggingService,) {
        this.activeThemeStorage = storageService!.getLocalForageStorage('activeThemeStorage');
        this.logger = loggingService!.getLogger({
            name: ' ThemeService'
        });
    }

    getCuratedThemes(): ITheme[] {
        return ThemeService.themes.slice(0);
    }

    isActiveTheme(theme: ITheme): boolean {
        if (!this.activeTheme) return false;
        return this.activeTheme.id === theme.id;
    }

    @action.bound
    async setActiveTheme(theme: ITheme): Promise<void> {
        this.activeTheme = theme;
        this.applyActiveThemeStyles();
        await this.storeActiveThemeId();
    }

    async clearActiveTheme(): Promise<void> {
        await this.setDefaultTheme();
    }

    bootstrapTheme(): Promise<ITheme> {
        this.logger.info('Bootstrapping theme');
        return this.bootstrapWithStoredActiveThemeId();
    }

    private async bootstrapWithStoredActiveThemeId(): Promise<ITheme> {
        const storedActiveThemeId = null;
        if (!storedActiveThemeId) return this.setDefaultTheme();

        const theme = this.getThemeWithId(storedActiveThemeId);

        if (!theme) {
            return this.setDefaultTheme();
        }

        await this.setActiveTheme(theme);

        return theme;
    }

    private async setDefaultTheme(): Promise<ITheme> {
        const defaultTheme = ThemeService.themes[1];
        await this.setActiveTheme(defaultTheme);
        return defaultTheme;
    }

    private getStoredActiveThemeId(): Promise<number | undefined> {
        return this.activeThemeStorage.get(ThemeService.ACTIVE_THEME_STORAGE_KEY);
    }

    private storeActiveThemeId() {
        return this.activeThemeStorage.set(ThemeService.ACTIVE_THEME_STORAGE_KEY, this.activeTheme!.id);
    }

    private getThemeWithId(id: number): ITheme | undefined {
        return ThemeService.themes.find((theme) => {
            return theme.id === id;
        });
    }

    private applyActiveThemeStyles(): void {
        if (!this.themeStylesheet) {
            this.logger.info('Creating and attaching stylesheet');
            this.themeStylesheet = jss.createStyleSheet(ThemeService.themeStylesheet, {link: true});
            this.themeStylesheet.attach();
        }

        this.logger.info('Updating stylesheet');
        this.themeStylesheet.update(this.activeTheme);
    }
}
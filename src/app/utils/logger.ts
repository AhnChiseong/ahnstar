export class Logger {

    private static uniqueInstance: Logger;
    
    private readonly LOGGER_DEBUG   = 1000;
    private readonly LOGGER_INFO    = 2000;
    private readonly LOGGER_WARN    = 3000;
    private readonly LOGGER_ERROR   = 4000;

    private readonly LOGGER_DEBUG_TITLE   = "DEBUG";
    private readonly LOGGER_INFO_TITLE    = "INFO";
    private readonly LOGGER_WARN_TITLE    = "WARN";
    private readonly LOGGER_ERROR_TITLE   = "ERROR";

    private loggerLevel:number      = this.LOGGER_DEBUG;

    public static getInstance(): Logger{
        if(this.uniqueInstance == undefined){
            this.uniqueInstance = new Logger();
        }

        return this.uniqueInstance;
    }

    public setLoggerLevel(loggerLevel:number):void{
        if(loggerLevel == this.LOGGER_DEBUG || loggerLevel == this.LOGGER_INFO || loggerLevel == this.LOGGER_WARN || loggerLevel == this.LOGGER_ERROR){
            this.loggerLevel = loggerLevel;
        }
    }

    public debug(message: string):void{
        this.print(this.LOGGER_DEBUG, this.LOGGER_DEBUG_TITLE, message);
    }

    public info(message: string):void{
        this.print(this.LOGGER_INFO, this.LOGGER_INFO_TITLE, message);
    }

    public warn(message: string):void{
        this.print(this.LOGGER_WARN, this.LOGGER_WARN_TITLE, message);
    }

    public error(message: string):void{
        this.print(this.LOGGER_ERROR, this.LOGGER_ERROR_TITLE, message);
    }

    private print(level: number, title: string, message: string):void{
        if(level >= this.loggerLevel){
            try{
                console.log("[" + title + "] " + message);
            }catch(e){

            }
        }
    }

}

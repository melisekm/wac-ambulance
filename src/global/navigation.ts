class PolyNavigationDestination {
    constructor(url: string) {
        this.url = url;
    }
    url: string;
}

class PolyNavigateEvent extends Event {
    constructor(destination: string | URL, info?: any) {
        super('navigate', { bubbles: true, cancelable: true });

        let rebased  = new URL(destination,  document.baseURI)
        this.canIntercept = location.protocol === rebased.protocol
        && location.host === rebased.host && location.port === rebased.port;
        this.destination = new PolyNavigationDestination(rebased.href);
        this.info = info;
    }

    destination: PolyNavigationDestination;
    canIntercept: boolean = true;
    info: any
    isIntercepted = false;

    intercept(_options?: any ) {
        this.isIntercepted = true;
        // options are ignored in this implementation, e.g. no handler or scroll
    }

    scroll(_options?: any ) {
        // not implemented
    }
}
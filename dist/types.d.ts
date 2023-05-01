declare type TorchMode = 'on' | 'off';
export declare type CameraApi = {
    capture: () => Promise<{
        uri: string;
    }>;
    setTorchMode: (mode: TorchMode) => void;
    requestDeviceCameraAuthorization: () => Promise<boolean>;
    checkDeviceCameraAuthorizationStatus: () => Promise<boolean>;
};
export {};

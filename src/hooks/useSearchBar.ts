import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

const useSearchBar = () => {
    const [isHistorySearchBarOpen, setIsHistorySearchBarOpen] = useState<boolean>(false);
    const [isClearButtonVisible, setIsCloseButtonVisible] = useState<boolean>(false);
    const [searchBarValue, setSearchBarValue] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);

    // TODO: take this data from reducer
    const HISTORY_ITEMS = [
        {label: 'History Item #1', id: "1"},
        {label: 'History Item #2', id: "2"},
        {label: 'History Item #3', id: "3"},
        {label: 'History Item #4', id: "4"},
        {label: 'History Item #5', id: "5"},
        {label: 'History Item #6', id: "6"},
        {label: 'History Item #7', id: "7"},
        {label: 'History Item #8', id: "8"},
        {label: 'History Item #9', id: "9"},
        {label: 'History Item #10', id: "10"},
    ];

    useEffect(() => {
        setIsValid(searchBarValue.trim().length > 2);
        setIsCloseButtonVisible(searchBarValue.trim().length > 0)
    }, [searchBarValue])

    const handleOnFocus = () => {
        setIsHistorySearchBarOpen(HISTORY_ITEMS.length > 0);

        // fetch history items
    };

    const handleLoseFocus = () => {
        setIsHistorySearchBarOpen(false);
        Keyboard.dismiss();
    };

    const handleOnChange = (enteredValue: string) => {
        setSearchBarValue(enteredValue);
    }

    const handleClearInput = () => {
        setSearchBarValue('');
        setIsHistorySearchBarOpen(false);
    };
    
    return {
        isHistoryVisible: isHistorySearchBarOpen,
        focusHandler: handleOnFocus,
        loseFocusHandler: handleLoseFocus,
        onChangeHandler: handleOnChange,
        clearInputHandler: handleClearInput,
        isSearchQueryValid: isValid,
        searchValue: searchBarValue,
        searchHistoryItems: HISTORY_ITEMS,
        isClearButtonVisible,
    };
}

export default useSearchBar;
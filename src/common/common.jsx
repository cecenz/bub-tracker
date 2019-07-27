import React from 'react'
import format from 'date-fns/format'

export const timestamp = () => format(new Date(), 'HHmmss')

export function SecondsToHours(timeInSeconds) {
    const pad = (num, size) => {
        return `000${num}`.slice(size * -1)
    }
    const time = parseFloat(timeInSeconds).toFixed(3)
    const hours = Math.floor(time / 60 / 60)
    const hoursSuffix = hours >= 12 ? 'pm' : 'am'
    const minutes = Math.floor(time / 60) % 60

    return `${pad(hours, 2)}:${pad(minutes, 2)} ${hoursSuffix}`
}

export const formatToDatabaseDate = date =>
    date ? format(date, 'YYYY-MM-DD') : format(new Date(), 'YYYY-MM-DD')

export const displayTime = date =>
    date ? format(date, 'h:m a') : format(new Date(), 'h:m a')

export const parseToDate = dateToString => {
    const dateArray = dateToString.split('-')
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).toDateString()
}

export const selectTime = (
    <>
        <option value="">Choose time</option>
        <option value="0">12:00 AM</option>
        <option value="900">12:15 AM</option>
        <option value="1800">12:30 AM</option>
        <option value="2700">12:45 AM</option>
        <option value="3600">01:00 AM</option>
        <option value="4500">01:15 AM</option>
        <option value="5400">01:30 AM</option>
        <option value="6300">01:45 AM</option>
        <option value="7200">02:00 AM</option>
        <option value="8100">02:15 AM</option>
        <option value="9000">02:30 AM</option>
        <option value="9900">02:45 AM</option>
        <option value="10800">03:00 AM</option>
        <option value="11700">03:15 AM</option>
        <option value="12600">03:30 AM</option>
        <option value="13500">03:45 AM</option>
        <option value="14400">04:00 AM</option>
        <option value="15300">04:15 AM</option>
        <option value="16200">04:30 AM</option>
        <option value="17100">04:45 AM</option>
        <option value="18000">05:00 AM</option>
        <option value="18900">05:15 AM</option>
        <option value="19800">05:30 AM</option>
        <option value="20700">05:45 AM</option>
        <option value="21600">06:00 AM</option>
        <option value="22500">06:15 AM</option>
        <option value="23400">06:30 AM</option>
        <option value="24300">06:45 AM</option>
        <option value="25200">07:00 AM</option>
        <option value="26100">07:15 AM</option>
        <option value="27000">07:30 AM</option>
        <option value="27900">07:45 AM</option>
        <option value="28800">08:00 AM</option>
        <option value="29700">08:15 AM</option>
        <option value="30600">08:30 AM</option>
        <option value="31500">08:45 AM</option>
        <option value="32400">09:00 AM</option>
        <option value="33300">09:15 AM</option>
        <option value="34200">09:30 AM</option>
        <option value="35100">09:45 AM</option>
        <option value="36000">10:00 AM</option>
        <option value="36900">10:15 AM</option>
        <option value="37800">10:30 AM</option>
        <option value="38700">10:45 AM</option>
        <option value="39600">11:00 AM</option>
        <option value="40500">11:15 AM</option>
        <option value="41400">11:30 AM</option>
        <option value="42300">11:45 AM</option>
        <option value="43200">12:00 PM</option>
        <option value="44100">12:15 PM</option>
        <option value="45000">12:30 PM</option>
        <option value="45900">12:45 PM</option>
        <option value="46800">01:00 PM</option>
        <option value="47700">01:15 PM</option>
        <option value="48600">01:30 PM</option>
        <option value="49500">01:45 PM</option>
        <option value="50400">02:00 PM</option>
        <option value="51300">02:15 PM</option>
        <option value="52200">02:30 PM</option>
        <option value="53100">02:45 PM</option>
        <option value="54000">03:00 PM</option>
        <option value="54900">03:15 PM</option>
        <option value="55800">03:30 PM</option>
        <option value="56700">03:45 PM</option>
        <option value="57600">04:00 PM</option>
        <option value="58500">04:15 PM</option>
        <option value="59400">04:30 PM</option>
        <option value="60300">04:45 PM</option>
        <option value="61200">05:00 PM</option>
        <option value="62100">05:15 PM</option>
        <option value="63000">05:30 PM</option>
        <option value="63900">05:45 PM</option>
        <option value="64800">06:00 PM</option>
        <option value="65700">06:15 PM</option>
        <option value="66600">06:30 PM</option>
        <option value="67500">06:45 PM</option>
        <option value="68400">07:00 PM</option>
        <option value="69300">07:15 PM</option>
        <option value="70200">07:30 PM</option>
        <option value="71100">07:45 PM</option>
        <option value="72000">08:00 PM</option>
        <option value="72900">08:15 PM</option>
        <option value="73800">08:30 PM</option>
        <option value="74700">08:45 PM</option>
        <option value="75600">09:00 PM</option>
        <option value="76500">09:15 PM</option>
        <option value="77400">09:30 PM</option>
        <option value="78300">09:45 PM</option>
        <option value="79200">10:00 PM</option>
        <option value="80100">10:15 PM</option>
        <option value="81000">10:30 PM</option>
        <option value="81900">10:45 PM</option>
        <option value="82800">11:00 PM</option>
        <option value="83700">11:15 PM</option>
        <option value="84600">11:30 PM</option>
        <option value="85500">11:45 PM</option>
    </>
)

import React, { useState } from 'react'

const Payment = () => {
    const [tab, setTab] = useState('card')
    const [cardNum, setCardNum] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')
    const [name, setName] = useState('')
    const [saveCard, setSaveCard] = useState(false)
    const [payState, setPayState] = useState('idle') // idle | loading | success
    const [selectedWallet, setSelectedWallet] = useState(null)
    const [upiId, setUpiId] = useState('')

    const formatCard = (val) => {
        const digits = val.replace(/\D/g, '').slice(0, 16)
        return digits.replace(/(.{4})/g, '$1 ').trim()
    }

    const formatExpiry = (val) => {
        const digits = val.replace(/\D/g, '').slice(0, 4)
        return digits.length >= 2 ? digits.slice(0, 2) + ' / ' + digits.slice(2) : digits
    }

    const getCardType = () => {
        const digits = cardNum.replace(/\s/g, '')
        if (digits.startsWith('4')) return 'VISA'
        if (/^5[1-5]/.test(digits)) return 'MC'
        if (/^3[47]/.test(digits)) return 'AMEX'
        return ''
    }

    const handlePay = () => {
        setPayState('loading')
        setTimeout(() => {
            setPayState('success')
            setTimeout(() => setPayState('idle'), 2500)
        }, 1800)

        setName("")
        setCardNum("")
        setExpiry("")
        setCvv("")
        setSelectedWallet(null)
        setUpiId("")
    }

    const tabs = ['card', 'upi', 'wallet']

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                {/* Header */}
                <div className="mb-5">
                    <h2 className="text-lg font-medium text-gray-900">Complete your payment</h2>
                    <p className="text-sm text-gray-500 mt-0.5">Enter your payment details below</p>
                </div>

                {/* Amount */}
                <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center justify-between mb-5">
                    <div>
                        <p className="text-xs text-gray-400 mb-0.5">Amount due</p>
                        <p className="text-2xl font-medium text-gray-900">$149.00</p>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="bg-blue-900 text-white rounded text-xs font-bold px-2 py-1">VISA</div>
                        <div className="bg-red-600 rounded w-9 h-6 relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-5 h-6 bg-amber-400 rounded-l-sm opacity-90" />
                        </div>
                        <div className="bg-blue-600 text-white rounded text-xs font-bold px-1.5 py-1">AMEX</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex border border-gray-200 rounded-xl overflow-hidden mb-5">
                    {tabs.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`flex-1 py-2 text-sm capitalize transition-colors ${tab === t
                                ? 'bg-gray-100 text-gray-900 font-medium'
                                : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {t === 'card' ? 'Credit card' : t === 'upi' ? 'UPI' : 'Wallet'}
                        </button>
                    ))}
                </div>

                {/* Card Panel */}
                {tab === 'card' && (
                    <div>
                        <div className="mb-4">
                            <label className="block text-xs text-gray-500 mb-1.5">Cardholder name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
                                placeholder="Rahul Sharma"
                                className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-xs text-gray-500 mb-1.5">Card number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={cardNum}
                                    onChange={(e) => setCardNum(formatCard(e.target.value))}
                                    placeholder="0000 0000 0000 0000"
                                    maxLength={19}
                                    className="w-full h-10 px-3 pr-14 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                                />
                                {getCardType() && (
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">
                                        {getCardType()}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-3 mb-4">
                            <div className="flex-1">
                                <label className="block text-xs text-gray-500 mb-1.5">Expiry date</label>
                                <input
                                    type="text"
                                    value={expiry}
                                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                                    placeholder="MM / YY"
                                    maxLength={7}
                                    className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs text-gray-500 mb-1.5">CVV</label>
                                <input
                                    type="password"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                    placeholder="•••"
                                    maxLength={4}
                                    className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-5">
                            <input
                                type="checkbox"
                                id="savecard"
                                checked={saveCard}
                                onChange={(e) => setSaveCard(e.target.checked)}
                                className="accent-violet-600 w-4 h-4 cursor-pointer"
                            />
                            <label htmlFor="savecard" className="text-sm text-gray-500 cursor-pointer">
                                Save this card for future payments
                            </label>
                        </div>
                    </div>
                )}

                {/* UPI Panel */}
                {tab === 'upi' && (
                    <div className="mb-5">
                        <label className="block text-xs text-gray-500 mb-1.5">UPI ID</label>
                        <input
                            type="text"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            placeholder="yourname@upi"
                            className="w-full h-10 px-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                        />
                        <p className="text-xs text-gray-400 mt-1.5">Enter your registered UPI ID (e.g. rahul@okicici)</p>
                    </div>
                )}

                {/* Wallet Panel */}
                {tab === 'wallet' && (
                    <div className="mb-5">
                        <label className="block text-xs text-gray-500 mb-2">Select wallet</label>
                        <div className="flex flex-wrap gap-2">
                            {['Paytm', 'PhonePe', 'Amazon Pay', 'Mobikwik'].map((w) => (
                                <button
                                    key={w}
                                    onClick={() => setSelectedWallet(w)}
                                    className={`px-4 py-2 rounded-lg text-sm border transition-colors ${selectedWallet === w
                                        ? 'border-violet-400 bg-violet-50 text-violet-800'
                                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {w}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Pay Button */}
                <button
                    onClick={handlePay}
                    disabled={payState === 'loading' || payState === 'success'}
                    className={`w-full h-11 rounded-xl text-white text-sm font-medium transition-all ${payState === 'success'
                        ? 'bg-green-700'
                        : payState === 'loading'
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-violet-700 hover:bg-violet-800 active:scale-[0.98]'
                        }`}
                >
                    {payState === 'loading'
                        ? 'Processing…'
                        : payState === 'success'
                            ? '✓ Payment successful'
                            : 'Pay $149.00'}
                </button>

                {/* Secure Badge */}
                <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1.5">
                    <svg width="10" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="6" width="10" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1" />
                        <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    Secured by 256-bit SSL encryption
                </p>

            </div>
        </div>
    )
}

export default Payment